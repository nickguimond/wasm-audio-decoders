export default function WASMAudioDecoderCommon(caller) {
  // setup static methods
  const uint8Array = Uint8Array;
  const float32Array = Float32Array;

  if (!WASMAudioDecoderCommon.modules) {
    Object.defineProperties(WASMAudioDecoderCommon, {
      modules: {
        value: new Map(),
      },

      setModule: {
        value(Ref, module) {
          WASMAudioDecoderCommon.modules.set(Ref, Promise.resolve(module));
        },
      },

      getModule: {
        value(Ref, wasm) {
          let module = WASMAudioDecoderCommon.modules.get(Ref);

          if (!module) {
            if (!wasm) {
              wasm = Ref.wasm
              module = WASMAudioDecoderCommon.inflateDynEncodeString(
                wasm.string,
                wasm.length
              ).then((data) => WebAssembly.compile(data));
            } else {
              module = WebAssembly.compile(
                WASMAudioDecoderCommon.decodeDynString(wasm)
              );
            }

            WASMAudioDecoderCommon.modules.set(Ref, module);
          }

          return module;
        },
      },

      concatFloat32: {
        value(buffers, length) {
          let ret = new float32Array(length),
            i = 0,
            offset = 0;

          while (i < buffers.length) {
            ret.set(buffers[i], offset);
            offset += buffers[i++].length;
          }

          return ret;
        },
      },

      getDecodedAudio: {
        value: (channelData, samplesDecoded, sampleRate) => ({
          channelData,
          samplesDecoded,
          sampleRate,
        }),
      },

      getDecodedAudioMultiChannel: {
        value(input, channelsDecoded, samplesDecoded, sampleRate) {
          let channelData = [],
            i,
            j;

          for (i = 0; i < channelsDecoded; i++) {
            const channel = [];
            for (j = 0; j < input.length; ) channel.push(input[j++][i]);
            channelData.push(
              WASMAudioDecoderCommon.concatFloat32(channel, samplesDecoded)
            );
          }

          return WASMAudioDecoderCommon.getDecodedAudio(
            channelData,
            samplesDecoded,
            sampleRate
          );
        },
      },

      /*
       ******************
       * Compression Code
       ******************
       */

      decodeDynString: {
        value(source) {
          const output = new uint8Array(source.length);
          const offset = parseInt(source.substring(11, 13), 16);
          const offsetReverse = 256 - offset;

          let escaped = false,
            byteIndex = 0,
            byte,
            i = 13;

          while (i < source.length) {
            byte = source.charCodeAt(i++);

            if (byte === 61 && !escaped) {
              escaped = true;
              continue;
            }

            if (escaped) {
              escaped = false;
              byte -= 64;
            }

            output[byteIndex++] =
              byte < offset && byte > 0 ? byte + offsetReverse : byte - offset;
          }

          return output.subarray(0, byteIndex);
        },
      },

      inflateDynEncodeString: {
        value(source, destLength) {
          source = WASMAudioDecoderCommon.decodeDynString(source);

          return new Promise((resolve) => {
            // prettier-ignore
            const puffString = String.raw`dynEncode0014u*ttt$#U¤¤U¤¤3yzzss|yusvuyÚ&4<054<,5T44^T44<(6U~J(44< ~A544U~6J0444545 444J0444J,4U4UÒ7U454U4Z4U4U^/6545T4T44BU~64CU~O4U54U~5 U5T4B4Z!4U~5U5U5T4U~6U4ZTU5U5T44~4O4U2ZTU5T44Z!4B6T44U~64B6U~O44U~4O4U~54U~5 44~C4~54U~5 44~5454U4B6Ub!444~UO4U~5 U54U4ZTU#44U$464<4~B6^4<444~U~B4U~54U544~544~U5 µUä#UJUè#5TT4U0ZTTUX5U5T4T4Uà#~4OU4U $~C4~54U~5 T44$6U\!TTT4UaT4<6T4<64<Z!44~4N4<U~5 4UZ!4U±_TU#44UU6UÔ~B$544$6U\!4U6U¤#~B44Uä#~B$~64<6_TU#444U~B~6~54<Y!44<_!T4Y!4<64~444~AN44<U~6J4U5 44J4U[!U#44UO4U~54U~5 U54 7U6844J44J 4UJ4UJ04VK(44<J44<J$4U´~54U~5 4U¤~5!TTT4U$5"U5TTTTTTT4U$"4VK,U54<(6U~64<$6_!4< 64~6A54A544U~6#J(U54A4U[!44J(44#~A4U6UUU[!4464~64_!4<64~54<6T4<4]TU5 T4Y!44~44~AN4U~54U~54U5 44J(44J UÄA!U5U#UôJU"UÔJU#UÔ"JU#U´"JT4U´ZTU5T4UôZTU5T4UDZTU5T4U$[T44~UO4U~5 UÔUô4U~U´$.U5T4UP[T4U~4~UO4U~5 U#<U#<4U~U2$.UÄUN 44 ~UO4U~5 44!~UO4U~5 4U~4~UO4U~5 44J44J(U5 44U¤~J@44Uä~J<44UD~J844U~J44U$54U$5U54U$54U1^4U1^!4U~54U~5U54U~6U4U^/65T4T4U$54U~4BU~4O4U54U~5 UU'464U'_/54UU~5T4T4U~4BU~UO4U54U~5 U54Uä~4U¤~4U~U'$!44~5U5T44\T44U<~$6U\!4U#aT4U~4U~4O4U~5 U5U5U5TTT4U$"4YTU5 4U4~C5U5 U5U5444$4~64~\TU5 4U~4U~5T4Y!44O4U~54U~54U5 4CYTU5 4Uä~4U¤~4U~4$6TU54U\!44Bæ4Bä~[!4U~4UD~4U~4U~4$6TU54U\!44B4B~[!44U<~4U4~$5 4U"U#$544"Y!454U^!44<J44<(J454U~84­UN!#%'+/37?GOWgw·×÷Uä;U9$%& !"#`;

            WASMAudioDecoderCommon.getModule(WASMAudioDecoderCommon, puffString)
              .then((wasm) => WebAssembly.instantiate(wasm, {}))
              .then((instance) => {
                const puff = instance.exports["puff"];
                const buffer = instance.exports["memory"]["buffer"];
                const heapView = new DataView(buffer);
                let heapPos = instance.exports["__heap_base"];

                // allocate destination memory
                const destPtr = heapPos;
                const destBuf = new uint8Array(buffer, destPtr, destLength);
                heapPos += destLength;

                // set destination length
                const destLengthPtr = heapPos;
                heapView.setUint32(destLengthPtr, destLength);
                heapPos += 4;

                // set source memory
                const sourcePtr = heapPos;
                const sourceLength = source.length;
                new uint8Array(buffer).set(source, sourcePtr);
                heapPos += sourceLength;

                // set source length
                const sourceLengthPtr = heapPos;
                heapView.setUint32(sourceLengthPtr, sourceLength);

                const ret = puff(
                  destPtr,
                  destLengthPtr,
                  sourcePtr,
                  sourceLengthPtr
                );

                resolve(destBuf);
              });
          });
        },
      },
    });
  }

  Object.defineProperty(this, "wasm", {
    enumerable: true,
    get: () => this._wasm,
  });

  this.getOutputChannels = (outputData, channelsDecoded, samplesDecoded) => {
    let output = [],
      i = 0;

    while (i < channelsDecoded)
      output.push(
        outputData.slice(
          i * samplesDecoded,
          i++ * samplesDecoded + samplesDecoded
        )
      );

    return output;
  };

  this.allocateTypedArray = (len, TypedArray) => {
    const ptr = this._wasm._malloc(TypedArray.BYTES_PER_ELEMENT * len);
    this._pointers.add(ptr);

    return {
      ptr: ptr,
      len: len,
      buf: new TypedArray(this._wasm.HEAP, ptr, len),
    };
  };

  this.free = () => {
    this._pointers.forEach((ptr) => {
      this._wasm._free(ptr);
    });
    this._pointers.clear();
  };

  this.instantiate = () => {
    if (caller._module)
      WASMAudioDecoderCommon.setModule(caller._EmscriptenWASM, caller._module);

    this._wasm = new caller._EmscriptenWASM(
      WASMAudioDecoderCommon
    ).instantiate();
    this._pointers = new Set();

    return this._wasm.ready.then(() => {
      caller._input = this.allocateTypedArray(caller._inputSize, uint8Array);

      // output buffer
      caller._output = this.allocateTypedArray(
        caller._outputChannels * caller._outputChannelSize,
        float32Array
      );

      return this;
    });
  };
}
