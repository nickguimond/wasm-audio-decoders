/* **************************************************
 * This file is auto-generated during the build process.
 * Any edits to this file will be overwritten.
 ****************************************************/

export default function EmscriptenWASM(WASMAudioDecoderCommon) {
var Module = Module;

function out(text) {
 console.log(text);
}

function err(text) {
 console.error(text);
}

function ready() {}

Module = {};

function abort(what) {
 throw what;
}

for (var base64ReverseLookup = new Uint8Array(123), i = 25; i >= 0; --i) {
 base64ReverseLookup[48 + i] = 52 + i;
 base64ReverseLookup[65 + i] = i;
 base64ReverseLookup[97 + i] = 26 + i;
}

base64ReverseLookup[43] = 62;

base64ReverseLookup[47] = 63;

function base64Decode(b64) {
 var b1, b2, i = 0, j = 0, bLength = b64.length, output = new Uint8Array((bLength * 3 >> 2) - (b64[bLength - 2] == "=") - (b64[bLength - 1] == "="));
 for (;i < bLength; i += 4, j += 3) {
  b1 = base64ReverseLookup[b64.charCodeAt(i + 1)];
  b2 = base64ReverseLookup[b64.charCodeAt(i + 2)];
  output[j] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
  output[j + 1] = b1 << 4 | b2 >> 2;
  output[j + 2] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i + 3)];
 }
 return output;
}

if (!EmscriptenWASM.wasm) Object.defineProperty(EmscriptenWASM, "wasm", {get: () => String.raw`dynEncode00e4 /©%éôaS
ÚéíØOõÀÏaKSxç+ÿ×ø±·ñåÔDvMJávM¬ìcê^éªëcÑ{ãÇgð¬K§ê°'°s¥3¸Ýpþ)ôèÌeæ¦Þ´Vfnèn»&6öµ]«× K."tXöêB£ÂIø÷3é §nËì ¤ú±ÐÔþ ê÷úWøK×©VcSà= u½=}b>ÙUA/Ü°#ÊÒ©Û¡&zàK³7dçíjÌìHh4ìÍ¿¤¡M:Bè¥ô«A!ì¼qß-,aÞÄtÈß²=}:ª1PK²àbWÓÁï
­1¸q¶â?_Ár"±Óg;×kå;M"µÑu:Ê°Z8"?ðGsm/¡ý½5Öz°>ØÍUÊ~c»v>=}Âå ÞwÊÊ3÷ 
¼ KÚD«¥}Ý^þì^ø~í±4d °Ì¾¬;ï±= w H)-æiªxY:±$ÿ+½ÍÞæ-VG£äÊC¯*IáÆ|ð:¬7t:=M
%Ëücõ®û§ïYÄ.éâq{D¢$u¶uÝßðgHü\ãÎIiÜ=}{?ÿdóG:,j³¡ØLMSñëÀ(tÅ(k}~0$=MGèÙµyf6gWúÄÍ¥µü©7ï*¼PØ©ªb=M<­=}ðª°/c+xîÚ£Ê"n¶Ô¤èLYÍ»þ8S ¹Rç°ãp®?¥ÑóòMÛðcë9Ø=M°TâÊ_»FÔ = hÊ"@tãÈÜÛz[¬â©w«[ êà¬ xí±H²@?àcÙåvàaÀ)C	Úþ¢ò¾ÏIIßk·s@(maÆú¼?XÝ³$&îöÞÆM  s°Âçÿ páÇe"&áKQ8ÆÈôxo]&è_¢ý'!=Mz)I·!îLÛÑ[xß¶]¾uç¬dé¼yOùRÖÆ¯³å£ÆD»a4NU!ÒG-}"ÎcÖo¡/ýséÔÚ[³Ô= <Ø'tIù3 ³kG¯FÞ0únD¥ßìj­<ÃNñE+r ÿE=MÛ)tÍ= nö0WIIäIdÐ4á¦Ë8kç¼ÈÂYú­Ä6w®éæ£4ònF<y_¬4r÷: ÝMØpÆ¼tð2k}0©¢<HEåRjÉþÀL\QB¬>1/	¢ÈFÆ·böak8ßÉg'½A[«û¶øh¥qè÷¾Á Ê³fÜ³¦ÕÝ~b§M«BØåä¥Õ4§¬T·Xi[	íwAMí{D£L:ïW!DL\ÖèÓ@PôÖ"Ö.¦ÉµÉIR(¸»Hü­I@­K­AÌÙ¦½(T?÷ÁÀBÅiµiµ?i!µ¿iµiµ_PGI5[¨n<¦U{{øæõ»$Ýøò:DÇoÅÔÙ,J2²}7²UÊ= À¯5²ÕlÕÞbxù*@ã[%ò?\Â¢â3g&IæVµòÔWúd&à¦'÷!­{ObÕÕxÕ<ÂËÔ"Ãë7¬ºKê¥Mß§Ë×Í­­¨yiÏ]	´jH§S¡;ÉN{ïyKÔt*Qþ!"u¨æ
ì|ýßù@´18{ØÉ1Þ~#xô»ùZïÉ9ó)ú¤^æO¦,þG·³À!FTjµü­®­£'âpZÑ­Gº:1UA TºÒ\Jª­^=MÆ;G£¾6!ãy¯±9$¾:ü7ñwYµ¼¶¼TÂ<ÚÌ±±u)WZ)[àN[ìô<CAvyÊ<OÝ±ÔUxJüA².~ÿ Ô@¿aFª«þVQâ7¡ Ï× ULrÈ>?">Þý©óÚûÿÊ¤ö¨Õ±H6à¢¨b-Í\Q¿QÏÕ¾sQZÛHWK7¼ÒÍÃ£u¸jª¯¶ 3Sø|à+á&'O<nd6h¸qó)_äòêÄÄeÉ³§Aù|~¤Äë§Ïs·=}.1ª{)çð ððð"±OiÏ
#=}üdM}TIKªò¢¾sûÔ\TTcÜEÍ÷=M·õïçÆü,BÙö{,Êý{}ä>tJöïìêsýAF<k^ìØØO&²ü	üiõJþiv¸£"ÇrC^¬]b[¤V¯Ý·°t  «ÐLÛãIBFR <X
vÚW<úÀÃJ¢6µr»Ân|/5§ý,«áRúLË)lç>è;n>ÀE~E¿{!¯	N¶gå*$óNDÃV^ÒaÌtèpû~n[Qá¤äØ¦ó6îg@ÒÌc\Ëèð.ôy. OÂYæê/5(mV[¢£]sõ¹vb S=}>öø{<èT)02v)åce´'ïµ~qh²±ZÁ%Ç0[2JÃ²Aînñ9=MK6óÓà*íG~Æ9<hmÎ¸Ë¯¥{"N.0§âëX~¬920ÃÅÊGj9)[Ò^5%EÐd}+ü6÷y¸{AØ/NpZb_
$¶¤¸5=MÞy©é¨A§r9?UÒú m´G9¦}VqTSX¸çM3p
OC>ëSeéðjóìÚhh>Ù®ä/X cOÃ ÷=}GIÀ~ùã'%+Åz±¢d]bûÓÓej?0rÊ±º[$@ Ö¦BÃz<ùSÚiQGï{+@®ißËáÇ¡q[zãË¦Ý¨3¶ókg¬p¡Ä[Û°´®©IIÞª«ÛBÍx1Ç«B= áònÇ;!hD¼@j!·lÄÜ~'ë»'§Úê´=Mê«½[X
Eý0ÍÎÕC6î^×H§å£X'Í¾¬@íQàZKR¤Öd²@_±Ë© ^ÕU¤ï^£cß$	k´&ïy´QÒ¨¡|Ù!¡Ã!÷Á¢W?{´¥ýâVy;añ÷6?r÷7õSS@j,ÔofC$Ù»ÄÆÒÛ³¼Cå	«uQ}å-y=}¹½¹¶pW¿ÓÔLú¸ÖÔ¬¯ðkúëÀv:/á°ð§= rkXÚgâÇËãÃ¡Ð¥×Ñ²ð^øB \zçé¯ü{ì}çI~¶ØÃã¥£Ýle{B¬(±²v:â	1:é?a]Ø|¶gÌñAn²²³KµþYGBg93ìÕéÅ~!f¸ÌCÖ¾8»Ì?÷v§­¢î=M®B®ü03÷S6*òIÎçÈeùåp%j3Ó?£ÑO6Ú.à]Í-.ódküÐï=M4Óë²EZ(¬©ÂúÈÌi5è« í¤PÉV¶ysXÉuÙû+ter:pþ²ÿ9÷Äû¥Ùêõe8"C9|ý\=MÃL(âÉ^±.ÊNV9AÛ_C
sßmèt¶ÄZ©{jØMÞµ$Äêè3Ì½L÷HrÜçôÑùÐÜ×æ8Þì	z¤müåbMhLójÄeäªOõáÀhzÄjëÆÕ«¿4};N:
Æê	cµíwÕNïVÒ.2:ÁZ)q¡§Gf ÍÛÛÝ5k$Ïä%L´\,OÌ­Ã~U2ñc1k{²÷)¹
ç¶k§*Ùëý»àãJq¤Ø¸²çµºa±@[q6%ÑÏk\©Å^ºA¼±wáî§UÈ3üèÅ§Þ"â÷ÛÛµdApZpTD:eÏ+×È(úüO[ñ²yð¶µ÷wªöaçÉÈçKáëãöñ'Æ=M¥ÑU®]@'ÏþèzLÙAËñ>á ^Í¶(¼Û5 õ½2_îO$þE'j³y"ÿñé¶*¼>\#êjÅUqÙy*wlf*1p~9¹,¹àâ²N¹rU:¨=}q¨=}µNµýK¹lý²(²YÑµX
¿²§vÙ¹ßõGVIã+r8ðþNóÂÐG8¾ï¶å°è¦p´8XpA1ýñÀ1E5%5*ËD[wÙqBôÄÖlÄG@1ºsd+ÁheXäUèF¤ìÀ)eßT£öûeßæÛg¤áe?õ9eôP+eD9ÄîÀîJ'Äî àd±~º¨q(È¤é%¥F8Ó<Ñ@Ó¥Àô¯²<ù×gkj= qÈÐlGì¦º¶çú íÔD>ªLö vü êM|M2»ÝµÎ3>h'Çé*%>¡Æ.ë'®hqÕÄ(¨NjñÏ	÷õá'4¯Â4\ç½^¢·ò)¸DìÂ¬Ç%m~ôÍE³ñ}«òåªYÞaìâÔºõ­¿lföm¸]©F~öfÁDD)bùLS2^ÝdÂgcì¿Îö2Ð@U««bóéÓ1TËÒY½9×xH°S)L
È³ÚÊUZ!Þ¼;hÐ/ãÌáG_øz¹&l(ÌDÜáD~)9f=M~|Ñ¸Ô¥¤Í7=} 3BkÊªÇSã²#	Ù¶ C~g:ÆÒ8ÿKâ1ßáÍqB¸{óèíö.Â8£N°^}âlâÃÙ1íç\åóëIãt}ßcÄ59gûÞF^~ ÇézþIÉ®¼%H0[¿ï>nÀ¹sEw§LfE°Ê3!èà;òz±§Dc¨ýCéø
â§Ä0×FðK/è; 6Wü+ë¨|{=d{äV´ÿ=}<ÓÜhúó»=}©f¤4sUÜÈ¾L1© =}MÇ\%_ØÃUu]2Ô?>SÝr¡/ËmªjXüçÝùCÌ¾Pup7pô¥ÍZ¼ ÐÏî[wH£;åýP2^1Í=}tòãyB$ÇáçðÌ£§g©Ø1Wb#ÚÜï}±'%Ëî3NÌo=Mê¥_1éÚccqÓâ ³= T28Å î914ïùFkÄ¡Ô©ÃéeÞf¿§2B[=MØÑ®Éhàþ7i~âClZ­a0	"]½¨G·sciÌîd%4½0ÕêJXñPs]Ùw f<ýX(äúWýîÁßiÊÀ1ÃT§±\DË<1¡îvÍÚOºCG
°R£ZÀbü§8ÃXÀbÑá>½bµNµIß±ºCáòýDWGß±XßéÐÐ%QYÕª5²±ËdèíjVKU³ÊÜÈÎðÄ96s1\iÓ×v7­ÑvW1Vâ×vsvo;SX\±·xGñRË¼OJß´¹vU^:5ß8[ò«ñ226*¿¼~ûP(T{Ê²¡]'Ì4ÈXSYÜØqý>ßDD.J&ûAx§ÎãwÕ´«Zkê=}8]á&²ÏÇ¸¥aVRë³gÛÈ°4"ÈbN¬7®MÈÞ1§XÊÍ®~s§üÙ0q-Ì6Üºõ>Wå;{Òt·ÙÒã>éóä£ãxe=M %¡Òg= ø@ofBåTº%AíÜ= vËðJé¿ëçÌóX@éqªjfµ¯fRÉôÝÊGó¡P,¥TÞÜ Ò/0×jEëR¾9S±¯>}lÆõobÝ¿å&ßN0JúÄ|Â8c×pÁGõÄìkÁ²e.£³qá^eÆàóÞaÇ$áÚ÷ìV= )Ã!ÔËö^wÜ]y1ÞÑ6TûÖÍÒ¨
¡i%óLK´ýP
4ê®~Ò21$\ãcª§ÙãÄIûyã¨9l^ËoÆ8&÷¶¢§w"âÐÑÞ(Èªc ;¹<SIÍcTóµÛóz<}ºXÔS¾vJlÑ¸ùLÞ= =MÁ7¢Ö_³@ñCÕÊÜÞ½?^=MI'p¸6o¶Óh¯;"¿ÐÆ>ÀSéùÌùó&oË[æd*=Mí¥¿ãóâÃSñÝÞ3½]8ùá£1òû)¯×v~£L
ÙyPIÇÄÊÿ_TÐí§ÛÐÅ¦JÍL´Ý0·Ý«GÔ½²ÔL¾.'+WqÔÔQ÷ü¬¿'£nwh´L¥´&¥¦@ïïyúþúJ>­&i!úV«6¥%{4¬4´µöAµ	6Ë.Øf(ô!öA1m1m(ËµáÂêMñ-¿5FV	4FJ.0)F1Fêxbn|H$MçÉò5ªM.ù-2]D<-ùu¤yV'¤9%ì.	px*ì¡ÃüË>_çC²Õ¤%)ãÊRÄt÷ ÞtÑÉªBÍ¼ïJÿÐº(6gµÝ¬^å|½ûPýà÷{eúç\¹HO>li}2 úN\2àpx«4+¶Ðx#	v¶-	,->Õ=}ç	J(MáøIêÁÁ$=}ôIâMze-ëZ*ËèyQCêh´¿q%ýëMSÆ/«I^-i3P@ðIÉ^'½OÝÈ42 x®ÝºÉv(ã/*FQtÄ-fßfuIÚ 5¼y!Ö¿4Üõ)SX­öh½è´qå~ÐÄ_K1ö]9Óù¦ÿm4?º@©²»ë»ù®Kþ¦FIì#ñv¬Ý+ö{¥åKìÝØÄD@ù\5\a¯ñKñÍdJm¾Ã¬LÍS¨Ç®qy=M	«<³RÒå»Q(*B®òù1gæ'
é¬YdÄ¸°´)ª¥¨9%Õ*	fµOcð-Û
^3R?i"LÚÑMËñrÀïíµ ÷¹SQîª±ã'¸àU!Yg?¬þÇc×tí÷>è0 ïÓ;ë{iÏi^ë;ÓZßtPBðÉùÓèWe¢µÃÙ6åDÿõ*=}Z~,ndrfq{é½µ©9¤t"5·;´ØJÉþÇ/GËì+7äÿ{Îô¹'ØÝ²¨¿»ÙìÆµ.Zbvm»³3öÜõzU}Þ±ü=}b!¨{ÒÕïÊLÜË°6ã¥½Ö	j=}Â?0kÃÈIº¡»×&Må¾ ¬¶S´¨ÄmOyÌwµ°Ènô×öçF Ô.ûo3çÕ±ÑQnfÓM~vvÃÒivâgo<ÂmÉ÷= 
z3ÐªÕß>«£tÉXPÓ £ìÉàóP_ªÛ¤ä,¿Ã5q4îLH%,²+vùIþP	Ë= @¼ÿv§¹JÊX0_ë'°Ê#øÑ0çöajcölxùÂ±IO¦ý4^ðÉ?{MÎÃÈËñ=}Ó'=M5ìª ·4¦&PÔ>=},À{6´rDPC=Mv8óÚ!»Ñ·ÂÇI#°f¡Á´|­ôTîñVÒß~cäÿ¯´:´hºiât êPì±gd¨¡WkÁ}ºíÜ6âÑ¬£wÖÓxn¦	êËA²4é3wÐi~# |vU=}ËvmRBìnNåAmõ¨
Tß
t»¡ë· þSu ®ò nRû¨Ê4Ú"x2ZReM&Tô2&ðà¤RU!¹o§Z3Ì¾HðòÐMxJºzGH~pì»Ën=  ²âì¬«ù3_ÜÌEZì(ÑÁjéMu¿,¯â¥ìï*§&lóél=Mf7q²ð·YZ)@%ÞÒ-Äô§@ôÿµ²d]jèï$¡Õ= &é©ÏÉõOËèÒôs²®Eû×ëû»0GZªÇTð¦Kjñàw¹ JÆ02¾}àN'= ¨%4 èéAhf{Á!-Ræi2»4hYg0a_n~µÒ&Æé.65ìQ1²ËêþUa÷£Ö,FâûhLÓH@cG1=MI 1rU¡yIÍÅ0=}Ve¤"¹Ð¦XÕeõpCi÷&¬xf(ËTõðêyï6LÑzÖF=MjÇøgm´í*þøÜèa=M~ë4×düñH¸!%Û¹9LjSú¢zÆ®HûMþAgÑTú¸ÏàVIl=}ÙÞØôj ò? °= ëÄß#Úº	G²6hèçx3¤URÜ)!Ål³rÜàlA«{/X;¨uÌ½U½nÒåvä3­¾êr»U¼l§ptáÈøÏ6HùÍÒì:¬ÿÄ0è{PdçUî4=MØ°Liñô¹ò
A[zý§)Ù;×=}Í1Cog!uÛÓ	§·4ï¸ ×ö¯½È4«@ÎBévWéðVr&ãtËa%´±¬@h}k&NóO9®#T¨_Ã^á¼ÎÙg»{ß#gøÛdÃ[VwI×¯&å"ï±írïwøL­à
ÇÅLB8MÀ¡HÔ¡­¼øGÖ°{Ævë»Îöé£.¤]Ûã=}±Ùó®LdÛBsÚ?4<¥¤Êì³û4Bî4+lTÃïù~Ñmm´âRgÒöqÃ3CÇäÙ.05L¢Xy%Ñ1Y1´päXî<l¦åiêÔØ²ç ·(¡ÄìÇÁÂ¥[ÈlcE;ÅÀc¾Íc|WeXM{ÑüvèzøEîP××Sæ¿òqdUMÄvòz¥î"Ä9\êÔc%6Úæ.Õíw;µä*Z/ýkª0Ó÷YßÅ
BB¬:{û¯ïOpýyæ7å®5<£òlÆ¾aX-ÙíEÓ3àSÝSßãÍÃ¡Ç¡©ã¥ãàKãÇ»aÏ~¯ÚY¹£Y)#]	."£kà(¦2@aBÓMû
{!DFZÕø^#åÍ«Å:å¨ßðZ<>Í|õÕwv Ô:Å
\óößcã§ª¢Ü²àý_QÓ ¶yáÁÆU9¾vz¾ÙÃöz¥N|ý|´f'vØJBëï­.5íñqëë§kÀÁ[z8ÙN5ª°ß°;DS°µ-Kçiè£X*ñÂYë³Ó äw¥!~ ã¿KÌ@»)°ïAþ£Æ·!ÁbËõÈpS=MT¼ðßÿÕbiMÄËÍW5Ò2ýlµ¤d}°ÉÃ ¿ö çsñlK$ «ÏÒ<QàzQ
X, Û×?¾= ê§?6Çl õøQËÆÒÍú!ÉëßVÜu¢Ð£]Ó¥°sl ýÒTvæïø'ÏE0H®ã°5ãwdÓ<êM0^«'-Ïy¶ñ.áÂøIS4,]¹ß©Z0p¾ËÄúõÁkAíý18Ú#Fz¡å°¡álM[q#q.O9Ý!jf)É(ÇêaædAÔmª:csM×y2}çIÁÜ-÷ °ËAÿ á³¦,ômeØþÄ´âÕgÇ!CsºGS«= ¾ÃV«­qÓ º§Ï¥éÝÂG¶Q"LÇ>&»c°ßç¡#âòïB8Ëaw"$*Õ4ùxx2XR8þP&ÜÆæ{LcYÇtõ¬4Ï+ããd-abLÕzê¾¸A¥ÒÃ0µ¬ÏÀÞG×N×a0GsÂâNßç= aáò Í7CE÷Mõw2BùÁb(sGàÜ­Y¸¥ÙüR<Ñ¡½>¼\¸%Q­ùÒæÔàk]<4àTN,	ûôôH^[^º_èXf?;!	2Aüüv tx²FuîSScSß	ÓuoßúKh.Þ ùLË7ÞU"=M_"ãq0ý±T¾"Ê·Je£üg}RkÍ'ms"jYõÒ¹X';z»s;*§=}æñ	XïYÓôæ­+Jª{¬Y¨FôVEôyikWk¢k¢ÄMîD³'&ôÆæåNÐíyO´Â»Âÿè{\~+]:%ô,Ï~ÝÀ¥qØd=}¬±pYbIÎÏv¨ w'ªD°NøGÀ©XÝÊ6°ÎÙlÂYõV çÎ0Ú²\¬:ï|G« ¸¥îü8\ºÝßü@ô<X÷.As÷³FÛ±ó]æÏâÀëÇ±¯ÜU7dvTìdÈ=Mw|»ÑyúÔ!Îyg_±ï4:#ÉX2Ò>³-«ZáùcQ'x)s±ûxåý®~¦Ïéè¯bÙgéÊ¯VÔ.FB	gVpd>åÌx][!ªKØp¾WïÄ([é^<w<êNÑìgÆwéqî´&Ñ6oqKbt4ÁÞó®PKO"°AJc9×ùJ*NQû«1= úVáà1U»Ò£¡M²PpTÕ?pâØdºÆ@¿Æj±qªÚ<a%^MºD8*uEæÙuéo©2³T
6ÐÏ¾üEjõâµÈXã×* +w+bIV^_»¼Ç:SsX¸³Ûzrô¤×uºmY*Sýb,¶þue¥Mò@çÈü´1¤ìj,E¼&¶ñ8«´ÓeLèÜp/¥EüÿÇx¸L9Þ»ËòÓp3 ¿iÀNFZ8_I.ÄðÜoJÜoJ?ß;!Y0¦´}J3§I<t±Þ¾Kº7$mÀæ¢Õâ^±Ià]Å"à©ZàR¨#O¸À6Ò Ø(OÙJ+"VÈërJ^±è[NàX=Mþ'ýù¥¶Õª@åÅ«h§g}
ö9¶Y1QråñlÁî¨(-¹.åi7nÛñ³ìèºý$È¬nf 'Ô*û=}a(A«N¶ÌqÄºÓêêÕÕ{¬IüPVÜpD´³î<¾ÏÊr×Ø
z¨¡¼í²>@Wêß½ût:= 0À /Á"×6Öæõéªì=}ßXfFC5¤YðWeR¶!¡øüvF<µ´¢MqÞ6kAX6¹ãÈáH½@nÐöqÇº
Ú¢ew>GÛYS·óZë¡PB¤@£ÃC²GHíµ=}H8¥é¯¦B¯DËwG ÇÙ¹à³Ç!s¿\w×ÁVµ¤{p µåk[qË­ÂÁB.05(.÷ÅÊ6XÇ^+{ÐIË*óÚf{æ@át´Ô_Rê+æ Æ	\>þòÌv(ÎÕbovÍ(Pøõ÷ßìDyÑtÃí»ÏÒEõ×fe/¬B²- =}¹dÛw*®Y¨µm$Zõ7Õ¨þAÍ¢n!ëa5Ð£AØ¬Ý(· ¾ÄÜass(]c	¦%+}ÞÜ¥mÐáÑr[jZöã]SÇcM ¹Âûâ'5¿Ì§k<MFÉAyi:F6JÜí"/÷g±Wã¯HË/à!MzûÉN~rÚ×=}!ÝÙ&Ï>Ãc©[Y!z¢ÅC±ÎNÁá ü/ÛcQA~boØÅ3}CYàE ñª#qLº4ÞãäÒÍ¼Úã= GÍ£0ÀªøM4ÓÆ¡ã6goÂ¬½N|gë÷|ç»û+§×áãzhä×"J/p(}NXÂ­lÜJTØãs8¹ ºfÌÊdÍ.¦YôÍÊhDÖ°È|ñ}çnCòJ\ÝQìÉXT] Ã·°I´þß­¬O?¿ÿâ(ChMÔÖùúc£ª"r7·áïÙô%=MóØ^$-ªÇN,ø«Y= Z­]#¿ÆH8x½AWÈe	}ãî+W®ù¬¹*_âo%IÏ²¼Þ#jºærÝ¼Þw'+Kÿ?cZLL1½N´^Ù2_5ÂcÑzyW¿KQÁ¹¡Ú?K¾a*0¦üædËå?ÁïûJCÚ	fª^Ü#¥ç©\½éu,gAoºENÒEûo;Óàõ<>Êð
î?¶:ïy:'£Éö<ö¬'8¿Y|Ó>Ë_[ Ú¦ïö±H¢ÿBjÁùÏÒ¤^ýË?væC	9u×Bò×Bò×ÒßëYN®E¶¯E¶a£©ýkýÛaÒ¾3&^_	³%Þ.N÷.0Í7ÍgFãÁ+Zï++ÅVèHÇHæåáý}0@P¡YçdØÕpÒXKApý×éÔDOÅSb²WÌÇ z'ÍvW|ðøb*K´Ã¿ÆÅÈð¼Ö4nérKa"Üÿl¡ÒSïò#ð/±gÖæÀõºy@@/R'ÅÐË*÷(?\UUw0=Ma
xå®Å¦
z²¯c¬ÃîÉ¨Ï0Âê;_§_¤¹eïuVÓÍ)¤wUßóïhþßb!9îë_í¾QSþTj×SFç!ÊDk:Ç=}	ÜàG¡ã¦X
È¯ÖÂ­ö°êk¢¦Z³u´9,¥óaBQëR@Z ~Ùu Þ ÛnÑFGîÚê&3¦mZñ$¥ë¶ÃÑÉ)ä~ý³_Wdâ¬*Xe©FC¹Ü-¢uIÈYP¹8>A:u58á:E3Y¬	Æø!{Öö£u­¦ ~9!B¿I0È9¼)¾µz¹ìi(KBÐajR5z×âIcBFè $(l8è,´µCûG$À6¹=MCÙp ÿÐLõbÏ½ì<0®xî>§Ãþ¢ñYW61Ó¯	cäèç"åY2óÚåx%à{n=}¡ÜPÏUñÎ\{éáFÞ%«ª I!AÑ?>ÃyæãHà¿C§vh¢(X m\]ú5¾sÿ\È¹4ÀDë«\Ä¬ñ  eS8ÞÛ*µìû ø HtU°$B­ÉÊ>*F;ÇjhoØNiíLÎðWÄ¹+x*5Þù.y±êJ
÷ îJfµì¨2÷Ì¹Î,@ñý®ö«"¡Hç¥ ?µ9)À'ÿè÷?ÛÊÍÇÈÿÞKè:¦éÀ+k²Øc%B/aáü<
é {}B\´eöµN×*¥È¥â~Ç÷cÈüaëäB,5[Kô^fõ$ÊiP|5ÖÇ3{f;÷=}sB¨5Ã úáDR­I³W^~Bsç:Wê'nn®õÞb4BËa!ð]µçÀ= SÙÿëÂ£sZíJøZ«;¨¬);¥´×<­úFÊVôL¾­õ%Ìö¤åïB¸V½Îûþjý;)ª»Ló¸]ä^öÍ"[Ôí'HJbi¸ÂZ]ÐtÑú=M#ª%ÊðûÔ²ÚòigÚÆð= è­(åÈ;&¬ûÇÞêA+âK¦½é§©TÍÚ¯Nõ½ èÑ^(Ä©x2ý£X6hÒ]ôB= a@¾¤_ÕÍÒ}Ô¬îµöûu¼õØ©1BBCÚ¸U¬3ÇÐ÷R$õ½düå÷ÁQ&õ&"RÎÜtNììÇ~»sQ 67×Ä58!°âÙñgrÞà}ñÇLWÀGfg±«j>»~¾~¥ªõþëÏ&­HÃ[lï^ÊE»ðp6¤½r:íK¸9¼e«¡MïÖÍk¡Ï 	ÐêîÑ ÒPn´²Ö3ó¯ß3µýq4xHPîxA¤Î/g¡V- ¤#ÉOÂRAÈ6MVyÍv= R·­-ÂÀ~
àzw=}0JR}û[}^7çÍ©4"{½XµP¾LÁj×Ô¶ã)J²ävñ¤ÍÎ¾~;yÏ2Ö£}µ­ÒJ[ìv@Àñêg¥Dü-|GFe¤åòT¤^¤åòo¥Füêo¥FìòÛÂãÂßÞÓrH
-ZñÎáá16ããáá³8«¬ÔöT+êÓ0Â£É2Ãiãê¼ç¹g@¤áé©ÂD;
±vî$ïc¶%Ë°YÛw#t»G,Ð@Ú;MÌÌ!WÅ@§OÁ(ë¶bôÃ,ÑóèIW¡¨Ö¡KMö¿_Q·«óÜeº¢ÐpÐÇ³ªã·Ïã?Ôcjâbû÷^®µshò^'L°µóhTØ~´Gr¢Øl;hVØë ¡XSíÁÇÌé a'LsËhÒTØrZÚ½ÊH¿c±ú?P^&0Ã|!Áü«N= rÅó+ür= nÅóå'ÔÅô§ó?ð?ü"øüîúüú"00aüEüÝTEpÙ<sÎMê»µ4úã ÃÝQ»à³¡= ·ûy"ØÑÜg£¨&,áWã^yÆ;éæ¡öc¥9ê.
t¾VI;dö6,î,=}%Ny®þ·{ú	ë< äh>È®v4ænyîY¯ÿ¼è]÷?ÇAßMáÏ´Rf4Jð¸¾}4ùÀ´«6í4Þ|ö0·öy§n"JeIað9ê/Þüôode"~ÛXqªµçÀ«þA,ÃÒ©EÃ¾ð¼JN[P¶Ï ôÈ¬Í)ÓZïNùsåWI8j{Ýaz±Ê¤ÐÈ ÛÒI¿rM*ºRNÑúºZÿOZkºÔíR)ß°²ø2µ7Èøñe7¸)q78[øe78-¥ù;÷G¾= u¹w>!i¹ªÎMèO-ÅÇRé&¹*:ÉÚùM2¾wÈñewºM1+¾ñzywº¡'â®Âþ÷_,àòý·ªn¸Ò¦îø:DGé@¯ôðXÑµvÖ?;bÇ®AÝyCX®Ö/}C¹ÁQö½F7?PEoù¼ªÒzºÒzaý/Cf@í7^ÍZ¤´=Müé7´é74Yøé&zWÒÕÒy6¼>?O!A:gI9ÛHðý¸aÅ¶AÞ]áª¬ÐÞ|~ú½¸7^E_PÓþÂúïMXV·¨Úgî@%¦ù8ZîNA%0Ê@u¡ø	2(8Ê·z|O÷î«ô$ÒV®y4êËy w»,Ê¶îù·M9|:aIG!$Í	Ø{B
§®æX©p©Í7ê\®(GÛYÆÚ?SÏB|?Y0i*"%flXý>Y;U&îHSÎHaàecreUÕ]ªÃ¬oþ±#@©¥ºþáÏC ¥¾
ØxíVØj´|ì!ÅÌ« a3Ìõ+ì!ÈÌ&ó^-Ì"+Ãö«µï&[Þj´+³íÁÅÌO& ÑÐ±­ã~2 ½HèK*«ð§µ¡bH¦Yr ÝTù§9æjÄ§j'ü"PP= ø"= |F|Þ¦ÖÅ¦õº¥Ñ£à×Øµ@>O#ËÐl)¬¿<~@«fÉë%blVÈ+0R,ÝÎyXÝ=M&RFgÈK·Ûü)8}dR= !e³í= ûö÷Ü(V92ÄG¡,8"eñ¡¬8esØ8½è"¸o$i÷Ü¤;¥è°²l8SæÙF1O[G,c¥WÈéª/'b"^õ9»v%ïã@8Q°C×øú3UKCÁH]§·Ox=}®æeÎ°<áo|J+²_Ï8Qhez]ý×mßÓ6J²X-(yªæÈÉAl!ÃYÃ°_GEnkö¬]Û)©j4bã^NÉ·)Ê<'1ñtE-K£È]ØÇIi$f^òys¼~1Ëø[Jù~=}²
{AÄ= ^Ä]@wøhLÖHeíóLÒÈ-ù~"]³òvÊøâð¡[~9¹2ØK®N¦7ª¹äóÔ·Ç4kG°ãÆ=MÛ,íÞSHÜ¯)?ÛHm_<éB«Î#N9µ;Ìé÷tõñËàç5í¯/§¥Ób¿âÊ»oWëDÌÇwöôÌåsB$ÌêD^áËBå|´ÿ&3^1Ìt;hª ¡ØhûhWØ´râ/Ì+ãØdc÷³µ£ìÁÇÌhÒVØ[&_ áq´râ.LkíQWX Äµº0£ìQ²Øo´ª0£ì³Øo´LCh:KÞ)ì¾½[H¬­zã~zwñ3þ2*ì2¤wfwºwx÷Å-¨-Þc¦åÜZsJ;]Û= ©©
QRÑZÀUQ¿º¹¸«ªbÇrËÁ³¢¯à.Âaëo	äÍcämãú£IñüvgÇ¶±/j[$WègÇ1òÑäu·=M·X'Iä ÄXfQ~ò($¹}»(Pp]_ øéQIÀ¹>0¤2·«XCDÉIUØ[û¸=M[)Q øµqôhºÕë±Çi°>h®KaÌïöqøXn=}¾sõü½m6«¤-X@Qòðu¼gip&«ÄEîP !^ì5L*Ø,>QªrëM¡èUÂiûT©Þ°#Æät*¯ÆJû7»Éø×2ûÃ2&k&ÜýLµ¸y=}ì-¬ÔÊ=MúË#A0/ADOÜ¡©4%å¥jL0lS,W6cÑç)sS}­¯ÆHaCûfEÃ(ËwO[kj0²É)åîqPR*+b9¼VÖ_t=M{BøÛl´ÑîÒúôën;õ	Nô´»ÖôOÄF	ø1îu¬°ÁÅñÞì÷9 ßÝz°ç$8©âÁ2R«?uº1ÿXª2_I:HÑñ-ÝOH}
úpÜ¹õØiÑô;1$ ÜÉà>&ML'óØ|ü4¤CU«>-¹´Q£eH	TÌ¾~Iµ¢ú¡aÉÅü£9@/^ë7hÉðÐbT
ÿ|äÚ?~2KySµ¬ÝÂIÐIbã1}¼×«G[äÜQDüÈ«Ãó¶ØSG»0à{êbìX<	¢¶4ÔÍÜÉtjº°^Ë¼<âhËZ¬A\$pT¯W2¾ñ =}OõCtûþ8 =M^Ô«æÜ
n=}$7H!¨tâ"{]ÅÒµ4AÇ5-æ:×ôÂ©]¹=M¾ÝÁZkÊP õßaI¡ªV-m­\j¦¢Zér0tºRÛ½t81Ï1ØÝj9\<ï;vdvÔ
RÑÆÄn	ÀÅ3'm¿#ùø6îUøMR?_ÎOòâô¸ùbt9O3óÀH= ~zøfMg5A}Å=M}¯ÜclVÿÚ(G3H$æ
ÆËæÛ(øÐjÝv8ê¥ÝPÖ}?~­âf9NÝ÷Èé9²r®mùó¦pr~"úÎ¯ø´»Åd,´AÔo·r¦g	ßÝf~õh2ä®#µjÉU¢Õ#5MwJ([QBý®R]ü®*cx´Hh5.3Wÿ.,£X:²Ì2*Ê)ªt %|²AU~;ezè¾-ê97KHþ¹
^rA×VÝbò¬ ~w5lq'´¦iÄH5¿íÑeÐnº6êjX´Õ=}(RöØüÕÅèüÄ¤d«0!%ò0öWAÀh}hFÉw+ôYN^¼/Hh(z »L-· K!ÑÅø08ë8,bHB
òôü4Xu+·¬É6ëª ·ÛèVÊyY.ýör¹F¼ü).óó=MÒ÷h ¯ÞÛøSÞ{³²ð/ÍR® Éº2R.X8êpõV!)Fô÷w*n=}5©¨w¶É¾¡µ½nñÇ~­µSbaw-ÙñùáBéCþL7ªÅáÿðZüðánzMCì­á ¹ìÌùÅ5e(19= ¿1Ãª­*×4þI£*Îh1Ôn¥Þ©5#hûhxvAõÝ/Éª0ÿÙþuÂpYç±,8±L×ðLðÏ«Þþè	N7$ò·'ÂSV9Ï©/­ÄãçfÉssG×}%kèªr0ð¤ÌÌqå%Æ¤ù ±È´T±[VµBðqØ½s= }ÅºáÒ¹¶vcÄäã³åÌÓáár®á¡}Hâr-}c¸B}cP6ò²Í°ãäèåßâ'ä%ìïsëòí ÿöù#T[b]POFI,3*%87>AÄËÒÍàßÖÙ¼Ãºµ¨§®±t{}pofi¡«¤­²¿À¹¶ãÜÕÚÇÈÑÎ¢slejwx~=M üõúçèñî;4=}B/0)&SLEJWXa^mrkdyv£ÝâÛÔÉÆÏÐ¥ª³¬Á¾·¸MRKDYV_= 5:C<1.'(ýûôéæïð
!2-$+69@?ZU\cNQHG"	êåìóþø÷ zu|nqhgÂ½´»¦©°¯ÊÅÌÓÞð·çT|ïôäÅ§NQKÎQ¿¸QQ¿:Nÿã¼¼ÝÚßä£/HÝëÆ-&lå5	Èhàt+6'ê-	-g´6^$CÍæ8yÞ6ï./þ8ÁëÅ u¯T'­=}\éÓÉ= eÖæÒ§}çïIgQ÷¤>ýwDê0y6êoeÏ e'Yî²¸­ò»Ä*ÁÅ@;ÅæÕe¢¸ìà#Ô¢ºW^õÇù!pØtÒ©4ÉðOO!fùZ§"¼7?D?Qq}¨Ø|*WGå±=}îª¸(þfãNàñ5½ãÄãÜSs§í +Ç°§ï]B2ËýÕêÀ¸¿_ÒÑáï[Ø®BqÏT1­I¡hûÊÁ= ¤3Ý5¢ÊÝ Õâe£ÕKc°³áuÃÉÝ¢l;Ô6Ã¦= Ç µKßÒ\äïñµp¿~$GQ¡QÑ¹z´.?P×Ì!KØ¨"µ[ßLSÌA?Zyr½-¾3_lù8®N4ARyçYâºo>?N&ñ0zzÖ=}%®2=}©Üø»âãÑ3æÄ% æâÅ=MôäÄU êæä ò]ùìº¢ñåärdàgÃ%ädÖY©kä¤_øæä ê{;eää[Ç"Ôi?$ädÿ¥ 2­ÍEýËjääKÉôäÄôÜ)ô $åä$äcá¯ôö&ìhh$ìôö&ìhh$,J|tôìè&&ìetôìè&&¼Á£¤Ó¤c¼ëõÆä52*üM)zïtÄðYÂÝ(wØ´Åo84Çé)+ú<¦e9@UJ}Q ÕIûó¼¤qU°HöÿÊ|¥î*ü§h%ðÕ{#¹¶¤51Z¼MY:ï´°YÁÙX7ÛÀµ/;@·©)[Âù8Ö%9Ca:=}Q£á9»ó¸Ô1U³¡8¶ÿÉxÕ®)ø×(%óáE^4ä?íæä\½K¿Q¿*Q5¿Q¿Q?Ûó¦å68Âg%ïüjÄ?åg´ïdQ<ê¥åë;Äøº¤ÓDñP¦#Dbg¥ð\óËÄÜæ»¥#Ô÷¤G4ëþÅék+Tûx¤RÔì içÄfÄéò¿Dç'd+t?±±¬sÊ+NÚ+utXsu¡Ê*WõÝ´Þm=M«GÏ1Ï=MJÿWº>LQF*>¡|Z0EZ¹Bª²¾k¼ß¼;Q±¢oM{FcG£UOg²	ÇVÇ2-úÛýÛ× ÛWç ËÁ 
 Ïa= ÎØíÁhBÆYö2^hY¦6Ó!â;¿l£µÉÝ»ÜKÁÒ=Mb£¹ªÛY=MS.Qge¥MI/ñðBvHÍÂ~8ÜÜ.~ÍöÛm;áJFÄ3ØëmãmYáá£¨ûák¨¿(ØÜ
ÙÙÁÜÙ·E@-Ñrqww^Â7{ªÓM£
ùw*¾qí¡!Ð02M×­S¶-7Rÿòð­§=}ÖÝLÜDÜv¯Ûj¹ÈÅÅ;Ö°Ly3þ7fLF,Ý3ÿaýá ü!ÀD(ÔºÆ­ÆàÜìÏE¹Kî'Ð> §¡©ªFõb|ãHx~Ê»ý6âJâx±°ý×B*¬yÂ3~·ËJû'ÞaÞ}zÁ»°.Í£ÍÃJ·DQ^¡è7ûª¥´H>ï"gc·ËÄµØ²ødôù»srC*äÒô[äÌÇ6ÀSHuÜnBN(ÃÔÆO¦ÞÕxsò 
 (³DÆ1¸ÎÎVú§.¸¿/7E¹TûÝùáÕw6rr2YÍexQN^K÷aº/M¦fÄä6EääLìÅ±GQ¾ ºÊ<[W@ìhô&ìhô&ìhô&ìhô&ìhô&ìhô¦c³Î¿¤ªº²?ëÏOÐyöÚ°N¿óßNy°!¤Ýg-WDREêÂ±r=}hw¤é~c>0Ì/1ÎKYÙ{º¾43MS¡;wuëûÔ^DP¨q <eÕrJåæ´ü¢èögÞ®z.¬}N¯k öÃonLÖ,ÖåÃnp×ònÿFànuí=}*v&¸	vrµtMtNX]ZE3¾GGþFYÞ+:OjüÊ0?T²¯-ÿ[ÌÀ·TÒíÉ¡oÛ(!SpÆË Þ;'Oó]ôq¦bäæ ÒfV\ì£%|k½õ°¦ZÔìEíÓánÃ¨##më\ÏKàÒÄc§¨CÜãð¹eGïqý«Õ_é27 27 r$©õPGI¸Êl1rA¶>«MQÍU>M?^Q.sLÁz4½Z¨
?«R¯<±_c§×á #Á£|n7ô¹úüàùÔ¤§î/§¾î]®÷¬5­É¨¬ØÐu¼,P\B}£# ýes¬"Årp8«.=MeÇÇºøGap v¶óµ>[ i*ës>°­&Vcé{T°Zð-¶WKýùËxÍÙqj*ËXM>ÄÍY~¥"9¾º$1Y¹Î ô¨$gB/]n£r/¹Í¤ÜÆwÕwØÜÇé%líö7µ¸f7tñ"g
u|@'0.#§m1¦
È9ß'÷Ü·u ßÒC±ÓØ;,æ0paÚyÖ®"SÄîÌ× @
[Ôj)éW£¬Rrë0©â) o¤))A%%(5$dûúZjaï!Ám©ÈÆÈRF-Þ9ÚNPí«Ã÷>ªCo©{JCço¨´}5ÂOèq)= Ô ç5TjïËg!1m}È°È
á_zi±®OÚkJÕ{Õ½½{X{Á×¹Ýù{y]ÙÑjZË =MT©X©~GÐtûY4Wk>AÞr­P|ËìWÞ?H¤K×lÊ#å^æ¶p+G-J¬Çt8N ?»À\eM±ýö¶·ÄplJºg®XOÎ¡=}ÄÐ|º?$Ôàlº3×u$-÷¡(=}îMê¼V5÷¶½;­Ý¬N_2£~<ÇAçrQtº»ïÿ:6d?aÿe1m1È*¾Äô²¼?QÆXOLï½¢=}ÂfÐäwL&U$òjTÒ¥Zoµ!Àß]Ä"Ò»ÓÚ^ÛfßFë'Ê'¦%OÐrÕFCé)M&C-8]¤®<8Fõ.IT] ×¹æYmzR8þêµ­D¬0j;¯,´vL?ÍZçÎD¾ ªm ®k~J_Àhl8¤4)aµÏÑéßF6{/ÌÚ¤ÁuR «[\t\$ÂÓ=M[°!ËQÐr\ë¡îVvAvg¬ÎßÞ0ê çDÚ(^Pb "h)ÅóaÒÎOáõ×ª¤¥¼/ÍyÝyÔ¶Þæb]r£Ôaæ"
"vÌÛ®ëÌç×ÂÝò_¢)Ãi8Rs¯Zc'mø¹=}®TÑ®!~/Ö;,=MÅ®Ly2[öèEgÍø¥Z¾Uj,1J¡= ¡	\:0s·AäqPs±AV@K6W½Â°íBuû×Æ{åw¯¼mz@_aR3d­Ézß)M9¾ÊÏbébåâÍ»üJßiÇ{iÞîßÿâ¦;gÝ/®{Çá¤*§GÇ÷XwÉr÷»³7J±ã0¾ r(ë¸¤ò§Ç/XÉéÒì»W³ÿJó¿ã>¾ùpª¸ãf#jcHÞóÊá¿Õvb²âãÔÄtà7ÉÕh2óis}vÇrÈínF#ÇkíÄTÝV"î$ªX²ñSþAýÕð§â8úºäjPf<VÔòÁÃw­Ô ËkK+¸
A\ç¢RGP¬xA¨øhÄÝ~V¢üS<SÀd"<Õ¨!;eKWÇC-Å¹µN4ÛÔ3Ô1ÃªâDî­#6£G£¥c7ÜaÔOhÇC»áôààó·ó£¿n 2ÖS¸C½Ó×Ã÷âöà 9xÜ[d3j'ªgÌ+/âe\ÓV_òÓâá6  ;9åD|æôzeõ.IÖ@åuVÈ	7Á2|ÀÅ8Ó9òÿåÿýÂj«îÔ¹¨ÖåY{íVi¶']$]bæÂgUÜÞî_róö­:PjïÏªßìuþ|þrõ..¹Þv³åbåeâu{ug¥iµsÅmÕåõ%5£EUâåÜõÖØÊ%Ä5ÎEÐU²e¬u¦¨º¥´µ¾ÅÀÕ8å6õ<B0%.5$E*UHeFuLR= ¥^µTÅZÕeu!=M¥µ	ÅÕååëõñïý%5ùE÷Ugw#§·Ç×ççé÷óíÿ'7ûGõW:ç4÷>@2',7&G(WJgDwNPb§\·VÇX×àçÞ÷ÔÚÈ'Æ7ÌGÒW°g®w¤ª¸§¶·¼ÇÂ×}gwywe§k·qÇo×ç÷'7¡GWæö&6 FV|fvxvd¦j¶pÆnÖ±f¯v¥«¹¦·¶½ÆÃÖáæßöÕÛÉ&Ç6ÍFÓVKfEvOQc¦]¶WÆYÖ;æ5ö?A3&-6'F)Vææèöòìþ& 6úFôVfv"¦¶
ÆÖGDÜË¨ÔÓ£¿£ãã¡üüüàýdUæ«ÆÛä=M:ê«ï>À&Pðô¤ò¨ö$fi¥Õsú¯cär¡LWÿêää`});

var UTF8Decoder = new TextDecoder("utf8");

function UTF8ArrayToString(heap, idx, maxBytesToRead) {
 var endIdx = idx + maxBytesToRead;
 var endPtr = idx;
 while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;
 return UTF8Decoder.decode(heap.subarray ? heap.subarray(idx, endPtr) : new Uint8Array(heap.slice(idx, endPtr)));
}

function UTF8ToString(ptr, maxBytesToRead) {
 if (!ptr) return "";
 var maxPtr = ptr + maxBytesToRead;
 for (var end = ptr; !(end >= maxPtr) && HEAPU8[end]; ) ++end;
 return UTF8Decoder.decode(HEAPU8.subarray(ptr, end));
}

var HEAP8, HEAP16, HEAP32, HEAPU8, HEAPU16, HEAPU32, HEAPF32, HEAPF64;

var wasmMemory, buffer, wasmTable;

function updateGlobalBufferAndViews(b) {
 buffer = b;
 HEAP8 = new Int8Array(b);
 HEAP16 = new Int16Array(b);
 HEAP32 = new Int32Array(b);
 HEAPU8 = new Uint8Array(b);
 HEAPU16 = new Uint16Array(b);
 HEAPU32 = new Uint32Array(b);
 HEAPF32 = new Float32Array(b);
 HEAPF64 = new Float64Array(b);
}

function _emscripten_memcpy_big(dest, src, num) {
 HEAPU8.copyWithin(dest, src, src + num);
}

function abortOnCannotGrowMemory(requestedSize) {
 abort("OOM");
}

function _emscripten_resize_heap(requestedSize) {
 var oldSize = HEAPU8.length;
 requestedSize = requestedSize >>> 0;
 abortOnCannotGrowMemory(requestedSize);
}

var SYSCALLS = {
 mappings: {},
 buffers: [ null, [], [] ],
 printChar: function(stream, curr) {
  var buffer = SYSCALLS.buffers[stream];
  if (curr === 0 || curr === 10) {
   (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
   buffer.length = 0;
  } else {
   buffer.push(curr);
  }
 },
 varargs: undefined,
 get: function() {
  SYSCALLS.varargs += 4;
  var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
  return ret;
 },
 getStr: function(ptr) {
  var ret = UTF8ToString(ptr);
  return ret;
 },
 get64: function(low, high) {
  return low;
 }
};

function _fd_close(fd) {
 return 0;
}

function _fd_read(fd, iov, iovcnt, pnum) {
 var stream = SYSCALLS.getStreamFromFD(fd);
 var num = SYSCALLS.doReadv(stream, iov, iovcnt);
 HEAP32[pnum >> 2] = num;
 return 0;
}

function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {}

var asmLibraryArg = {
 "d": _emscripten_memcpy_big,
 "c": _emscripten_resize_heap,
 "b": _fd_close,
 "a": _fd_read,
 "e": _fd_seek
};

function initRuntime(asm) {
 asm["g"]();
}

var imports = {
 "a": asmLibraryArg
};

var _free, _malloc, _create_decoder, _destroy_decoder, _decode;


this.setModule = (data) => {
  WASMAudioDecoderCommon.setModule(EmscriptenWASM, data);
};

this.getModule = () =>
  WASMAudioDecoderCommon.getModule(EmscriptenWASM);

this.instantiate = () => {
  this.getModule().then((wasm) => WebAssembly.instantiate(wasm, imports)).then((instance) => {
    var asm = instance.exports;
 _free = asm["h"];
 _malloc = asm["i"];
 _create_decoder = asm["j"];
 _destroy_decoder = asm["k"];
 _decode = asm["l"];
 wasmTable = asm["m"];
 wasmMemory = asm["f"];
 updateGlobalBufferAndViews(wasmMemory.buffer);
 initRuntime(asm);
 ready();
});

this.ready = new Promise(resolve => {
 ready = resolve;
}).then(() => {
 this.HEAP = buffer;
 this._malloc = _malloc;
 this._free = _free;
 this._create_decoder = _create_decoder;
 this._destroy_decoder = _destroy_decoder;
 this._decode = _decode;
});
return this;
}}