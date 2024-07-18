const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`
 𝑯𝒂𝒊 𝑷𝒆𝒓𝒌𝒆𝒏𝒂𝒍𝒌𝒂𝒏 𝑺𝒂𝒚𝒂 𝒂𝒅𝒂𝒍𝒂𝒉 𝑭𝒊𝒐𝒏𝒚 𝑴𝒅 𝒚𝒂𝒏𝒈 𝒅𝒊 𝑷𝒓𝒐𝒈𝒓𝒂𝒎 𝑫𝒆𝒏𝒈𝒂𝒏 𝒑𝒆𝒎𝒐𝒅𝒆𝒍𝒂𝒏 𝑱𝒂𝒗𝒂𝑺𝒄𝒓𝒊𝒑𝒕 𝒅𝒂𝒏 𝒔𝒂𝒚𝒂 𝒅𝒊𝒌𝒆𝒎𝒃𝒂𝒏𝒈𝒌𝒂𝒏 𝒐𝒍𝒆𝒉 𝒔𝒆𝒔𝒆𝒐𝒓𝒂𝒏𝒈 𝒀𝒂𝒏𝒈 𝑩𝒆𝒓𝒏𝒂𝒎𝒂 𝑭𝒂𝒍𝒍𝑿𝒅.
 
 𝑱𝒊𝒌𝒐𝒖𝒔𝒉𝒐𝒌𝒂𝒊 : 
 "𝑺𝒆𝒑𝒆𝒓𝒕𝒊 𝑺𝒊𝒎𝒇𝒐𝒏𝒊 𝒚𝒂𝒏𝒈 𝒎𝒆𝒏𝒆𝒏𝒂𝒏𝒈𝒌𝒂𝒏 𝑯𝒂𝒕𝒊, 𝑯𝒂𝒍𝒐 𝑨𝒌𝒖 𝑭𝒊𝒐𝒏𝒚".
╭랜࿆──────────┈◦•⏤͟͟͞͞★
╎│❦ self *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ clearall *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ pinchat *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ unpinchat *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ gconly *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ public *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ setpppanjang *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ setppgcpanjang *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ addcase *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ join *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ bctext *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ poll *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ bcimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ bcvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ creategc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ setexif *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ userjid *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ setbotname *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ setbotbio *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ delppbot *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ shutdown *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ setppbot *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ addprem *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ delprem *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ addowner *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ delowner *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ addvn *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ delvn *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ addsticker *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ delsticker *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ addimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ delimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ addvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ delvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ block *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ unblock del *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ leavegc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ pushkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ pushkontakv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ pushkontakv3 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ pushkontakv4 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ savekontakv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ savekontakv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ getkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ sendkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ jpm *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ jpm2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ spamsms (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ bannedwa (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ unbanwa (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ unbanwav2 (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ unbanwav3 (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ unbanwav4 (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ unbanwav5 (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★

┏━━⊱-『 Islami Menu 』⏤͟͟͞͞★
╎│❦ kisahnabi
╎│❦ asmaulhusna
╎│❦ bacaansholat
╎│❦ audiosurah
╎│❦ ayatkursi
╎│❦ doaharian╎
╎│❦ niatsholat
╎│❦ quotesislami
╎│❦ doatahlil
╎ ⃟ꕥ________________⏤͟͟͞͞★
╭랜࿆───『 Group Menu 』⏤͟͟͞͞★
╎│❦ autoaigc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ autosimi *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ nanochat *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ mute *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ setwelcome *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ setleft *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ welcome on/of *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antilink *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antiwame *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ linkgc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ invite *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ ephemeral *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ delete *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ setppgroup *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ delppgroup *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ setname *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ setdesc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ add *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ kick *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ promote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ demote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ hidetag *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ totag *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ tagall *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ editinfo *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ opentime *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ closetime *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ resetlink *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ getbio *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ vote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ upvote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ downvote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ checkvote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ delvote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ autostickergc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antilinkgc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antiwame *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antilinkall *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antilinktiktok *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antilinkfb *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antilinktwitter *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antilinkig *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antlinktg *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antilinkytvid *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antilinkytch *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antivirus *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antitoxic *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ nsfw *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ react *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Push - Menu 』⏤͟͟͞͞★
╎│❦ cekidgc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ pushkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ pushkontakv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ pushkontakv3 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ pushkontakv4 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ savekontakv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ savekontakv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ getkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ sendkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ jpm *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ jpm2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Cpanel - Menu 』⏤͟͟͞͞★
╎│❦ panel *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listusr *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ delusr *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ listsrv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ delsrv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ tutorial *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ ramlist *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ premlist *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ addusr *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ addsrv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ updatesrv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ suspend *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ unsuspend *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ createadmin *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ listadmin *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 List - Panel 』⏤͟͟͞͞★
╎│❦ 1gb [user,nomor]
╎│❦ 2gb [user,nomor]
╎│❦ 3gb [user,nomor]
╎│❦ 4gb [user,nomor]
╎│❦ 5gb [user,nomor]
╎│❦ 6gb [user,nomor]
╎│❦ 7gb [user,nomor]
╎│❦ 8gb [user,nomor]
╎│❦ 9gb [user,nomor]
╎│❦ unli [user,nomor]
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Download Menu 』⏤͟͟͞͞★
╎│❦ tiktok*ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tiktokslide*ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tiktokaudio*ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ytsearch *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ttsearch *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ teraboxdl *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ snackvideo *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ capcutdl *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ play *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ytmp3 *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ytmp4 *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ google *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ imdb *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ weather *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ wanumber *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ instagram *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ facebook *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ twittervid *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ telestick *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
╎│❦ spotify *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
╎│❦ gitclone *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ happymod *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gdrive *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ pinterest *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ringtone *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Game Menu 』⏤͟͟͞͞★
╎│❦ tebakkata *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tebaktebakan *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tebaklirik *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tebakgambar *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tebaklagu *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tebakkimia *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ asahotak *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ siapaaku *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ susunkata *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tekateki *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tebakbendera *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tebakbenderav2 *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tebakkabupaten *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ caklontong *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ family100 *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ werewolf *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Rpg Menu 』⏤͟͟͞͞★
╎│❦ kerja *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ adventure *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ jelajah *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fightnaga *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fightkucing *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fightphonix *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fightgriffin *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fightkyubi *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fightcentaur *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ nabung *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ mining *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bankcek *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ maling *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ banknabung *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ banktarik *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ berkebon *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ crafting *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bet *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bonus *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ buah *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ nebang *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bekerja *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bansos *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ taxy *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ mulung *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ berburu *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ polisi *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ berdagang *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ rampok *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bunuh *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ collect *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ mancing *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ repair *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ feed *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fight *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gajian *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ upgrade *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ transfer *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ shop *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ selectskill *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ sampah *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ roket *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ojek *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ nguli *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ pasar *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ rob *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ referal *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ petshop *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kolam *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ koboy *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ leaderboard *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ casino *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Store-Menu 』⏤͟͟͞͞★
╎│❦ list *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ addlist *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ dellist *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ update *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ jeda *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tambah *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kurang *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kali *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bagi *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ delsetdone *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ changedone *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ setdone *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ delproses *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ changeproses *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ setproses *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ proses <reply chat> *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ done <reply chat>*ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Random Video 』⏤͟͟͞͞★
╎│❦ tiktokgirl *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tiktoknukthy *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tiktokkayes *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tiktokpanrika *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tiktoknotnot *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tiktokghea *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tiktoksantuy *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tiktokbocil *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Stalker 』⏤͟͟͞͞★
╎│❦ igstalk *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ffstalk *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ mlstalk *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ npmstalk *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ghstalk *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 OpenAI 』⏤͟͟͞͞★
╎│❦ openai *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ai *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bard *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ocr *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ jadizombie *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ blackboxai *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ photoleapai *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lamaai *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ aivo *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gemini *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ text2img *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ absolutely *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ dalle *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bingimg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gptimg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ anything *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ hdvid *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cai *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ youai *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ remini *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ jadianime *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ removebg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ nulis *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Fun Menu 』⏤͟͟͞͞★
╎│❦ smeme *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ppcouple *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ define *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ qc *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lyrics *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ suit *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ math *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tictactoe *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fact *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ truth *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ dare *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ couple *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ soulmate *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ stupidcheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ handsomecheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ uncleancheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ hotcheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ smartcheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ greatcheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ evilcheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ dogcheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ coolcheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ waifucheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ awesomecheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gaycheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cutecheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lesbiancheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ hornycheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ prettycheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lovelycheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ uglycheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ pick *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ quotes *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ can *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ is *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ when *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ where *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ what *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ how *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ rate *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cry *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kill *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ hug *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ pat *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lick *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ kiss *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bite *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ yeet *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bully *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bonk *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ wink *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ poke *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ nom *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ slap *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ smile *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ wave *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ awoo *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ blush *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ smug *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ glomp *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ happy *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ dance *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cringe *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cuddle *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ highfive *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ shinobu *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ handhold *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ spank *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tickle *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ avatar *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ feed *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ foxgirl *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gecg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ checkme *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ sound1 - sound161 *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Random Photo 』⏤͟͟͞͞★
╎│❦ aesthetic *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ coffee *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ wikimedia *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ wallpaper *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ art *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bts *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ dogwoof *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ catmeow *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lizardpic *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ goosebird *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ 8ballpool *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cosplay *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ hacker *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cyber *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gamewallpaper *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ islamic *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ jennie *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ jiso *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ satanic *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ justina *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cartoon *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ pentol *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cat *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kpop *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ exo *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lisa *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ space *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ car *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ technology *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bike *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ shortquote *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ antiwork *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ hacking *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ boneka *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ rose *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ryujin *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ulzzangboy *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ulzzanggirl *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ wallml *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ wallphone *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ mountain *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ goose *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ profilepic *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ couplepic *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ programming *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ pubg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ blackpink *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ randomboy *ғʀᴇᴇ ᴏɴʟʏ*  
╎│❦ randomgirl *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ hijab *ғʀᴇᴇ ᴏɴʟʏ*  
╎│❦ chinese *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ indo *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ japanese *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ korean *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ malay *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ thai *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ vietnamese *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Sticker 』⏤͟͟͞͞★
╎│❦ goose *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ woof *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ 8ball *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lizard *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ meow *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gura *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ doge *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ patrick *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lovestick *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Anime 』⏤͟͟͞͞★
╎│❦ akira *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ akiyama *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ana *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ asuna *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ayuzawa *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ boruto *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ chiho *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ chitoge *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cosplayloli *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cosplaysagiri *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ deidara *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ doraemon *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ elaina *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ emilia *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ erza *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gremory *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ hestia *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ hinata *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ husbu *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ inori *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ isuzu *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ itachi *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ itori *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kaga *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kagura *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kakasih *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kaori *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ keneki *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kotori *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kurumi *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ loli *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ madara *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ megumin *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ mikasa *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ mikey *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ miku *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ minato *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ naruto *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ neko *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ neko2 *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ nekonime *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ nezuko *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ onepiece *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ pokemon *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ randomnime *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ randomnime2 *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ rize *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ sagiri *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ sakura *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ sasuke *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ shina *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ shinka *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ shinomiya *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ shizuka *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ shota *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tejina *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ toukachan *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tsunade *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ waifu *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animewall *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ yotsuba *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ yuki *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ yulibocil *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ yumeko *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ 8ball *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tickle *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gecg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ feed *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animeawoo *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animemegumin *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animeshinobu *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animehandhold *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animehighfive *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animecringe *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animedance *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animehappy *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animeglomp *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animeblush *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animesmug *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animewave *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animesmille *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animepoke *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animewink *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animebonk *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animebully *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animeyeet *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animebite *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animelick *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animekill *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animecry *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animewlp *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animekiss *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animehug *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animeneko *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animepat *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animeslap *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animecuddle *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animewaifu *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animenom *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animefoxgirl *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animegecg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animetickle *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animefeed *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animeavatar *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ genshin *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ anime *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Anime NSFW 』⏤͟͟͞͞★
╎│❦ hentai *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ gifhentai *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ gifblowjob *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ hentaivid *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ hneko *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ nwaifu *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ animespank *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ trap *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ gasm *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ ahegao *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ ass *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ bdsm *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ blowjob *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ cuckold *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ cum *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ milf *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ eba *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ ero *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ femdom *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ foot *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ gangbang *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ glasses *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ jahy *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ masturbation *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ manga *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ neko-hentai *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ neko-hentai2 *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ nsfwloli *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ orgy *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ panties *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
╎│❦ pussy *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ tentacles *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ thighs *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ yuri *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ zettai *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ xnxxsearch *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
╎│❦ xnxxdl *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Textpro Maker 』⏤͟͟͞͞★
╎│❦ sertifikattolol *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ attp *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ ttp *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ ktpmaker *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ carimusik *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ candy *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ christmas *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ 3dchristmas *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ sparklechristmas *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ deepsea *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ scifi *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ rainbow *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ waterpipe *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ spooky *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ pencil *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ circuit *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ discovery *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ metalic *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ fiction *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ demon *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ transformer *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ berry *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ thunder *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ magma *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ 3dstone *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ neonlight *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ glitch *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ harrypotter *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ brokenglass *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ papercut *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ watercolor *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ multicolor *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ neondevil *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ underwater *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ graffitibike *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ snow *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ cloud *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ honey *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ ice *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ fruitjuice *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ biscuit *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ wood *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ chocolate *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ strawberry *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ matrix *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ blood *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ dropwater *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ toxic *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ lava *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ rock *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ bloodglas *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ hallowen *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ darkgold *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ joker *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ wicker *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ firework *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ skeleton *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ blackpink *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ sand *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ glue *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ 1917 *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ leaves *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ retro *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ pornhub *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ 8bit *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ batman *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ 3dbox *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lion *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ 3davengers *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ window *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ 3dspace *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bokeh *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ holographic *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ thewall *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ carbon *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ whitebear *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ metallic *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ steel *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fabric *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ancient *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ marvel *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 PhotoOxy Maker 』⏤͟͟͞͞★
╎│❦ shadow *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ write *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ romantic *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ burnpaper *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ smoke *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ narutobanner *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ love *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ undergrass *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ doublelove *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ coffecup *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ underwaterocean *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ smokyneon *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ starstext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ rainboweffect *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ balloontext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ metalliceffect *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ embroiderytext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ flamingtext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ stonetext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ writeart *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ summertext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ wolfmetaltext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ nature3dtext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ rosestext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ naturetypography *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ quotesunder *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ shinetext *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Ephoto360 Maker 』⏤͟͟͞͞★
╎│❦ glitchtext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ writetext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ advancedglow *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ typographytext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ pixelglitch *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ neonglitch *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ flagtext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ flag3dtext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ deletingtext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ blackpinkstyle *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ glowingtext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ underwatertext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ logomaker *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cartoonstyle *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ papercutstyle *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ watercolortext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ effectclouds *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ blackpinklogo *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gradienttext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ summerbeach *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ luxurygold *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ multicoloredneon *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ sandsummer *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ galaxywallpaper *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ 1917style *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ makingneon *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ royaltext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ freecreate *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ galaxystyle *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lighteffects *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Database 』⏤͟͟͞͞★
╎│❦ setcmd *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ delcmd *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listcmd *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lockcmd *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ addmsg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ delmsg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ getmsg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listmsg *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Bug & War 』⏤͟͟͞͞★
╎│❦ pmbug *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ delaybug *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ trollybug *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ docubug <nomer> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ bombug <nomer> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ lagbug <nomer> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ unlimitedbug <nomer> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ amountbug <jumlah> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ gcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ delaygcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ trollygcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ laggcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ bomgcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ unlimitedgcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ docugcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Other Menu 』⏤͟͟͞͞★
╎│❦ ping *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ paptt *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ alkitab *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ totalfitur *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ menu *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ myip *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ reportbug *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listpem *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ liststicker *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listimage *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listvideo *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listvn *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listbadword *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listpc *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listgc *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ owner *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ jadibot *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listjadibot *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ donate *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ friend *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ obfuscate *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ styletext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fliptext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tts *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ say *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ togif *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ toqr *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bass *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ blown *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ deep *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ earrape *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fast *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fat *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ nightcore *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ reverse *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ robot *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ slow *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ smooth *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ squirrel *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tinyurl *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tinyurl *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tovn *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ toaudio *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tomp3 *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tomp4*ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ toimg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ toonce *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ sticker *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ take *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
╎│❦ emoji *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ volume *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ebinary *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ dbinary *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ssweb *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ quoted *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ runtime *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.animemenu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Anime 』⏤͟͟͞͞★
╎│❦ akira *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ akiyama *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ana ??
╎│❦ asuna *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ayuzawa *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ boruto *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ chiho *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ chitoge *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cosplayloli *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cosplaysagiri *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ deidara *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ doraemon *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ elaina *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ emilia *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ erza *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gremory *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ hestia *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ hinata *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ husbu *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ inori *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ isuzu *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ itachi *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ itori *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kaga *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kagura *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kakasih *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kaori *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ keneki *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kotori *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kurumi *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ loli *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ madara *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ megumin *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ mikasa *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ mikey *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ miku *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ minato *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ naruto *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ neko *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ neko2 *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ nekonime *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ nezuko *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ onepiece *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ pokemon *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ randomnime *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ randomnime2 *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ rize *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ sagiri *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ sakura *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ sasuke *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ shina *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ shinka *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ shinomiya *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ shizuka *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ shota *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tejina *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ toukachan *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tsunade *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ waifu *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animewall *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ yotsuba *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ yuki *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ yulibocil *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ yumeko *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ 8ball *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tickle *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gecg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ feed *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animeawoo *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animemegumin *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animeshinobu *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animehandhold *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animehighfive *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animecringe *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animedance *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animehappy *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animeglomp *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animeblush *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animesmug *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animewave *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animesmille *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animepoke *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animewink *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animebonk *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animebully *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animeyeet *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animebite *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animelick *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animekill *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animecry *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animewlp *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animekiss *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animehug *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animeneko *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animepat *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animeslap *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animecuddle *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animewaifu *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animenom *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animefoxgirl *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animegecg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animetickle *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animefeed *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ animeavatar *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ genshin *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ anime *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.ownermenu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Owner Menu 』⏤͟͟͞͞★
╎│❦ self *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ clearall *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ pinchat *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ unpinchat *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ public *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ gconly *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ setpppanjang *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ setppgcpanjang *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ addcase *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ join *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ bctext *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ poll *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ bcimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ bcvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ creategc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ userjid *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ setexif *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ setbotname *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ setbotbio *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ delppbot *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ shutdown *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ setppbot *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ addprem *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ delprem *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ addowner *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ delowner *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ addvn *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ delvn *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ addsticker *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ delsticker *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ addimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ delimage *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ addvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ delvideo *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ block *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ unblock del *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ leavegc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ pushkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ pushkontakv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ pushkontakv3 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ pushkontakv4 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ savekontakv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ savekontakv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ getkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ sendkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ jpm *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ jpm2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ spamsms (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ bannedwa (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ unbanwa (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ unbanwav2 (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ unbanwav3 (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ unbanwav4 (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ unbanwav5 (628xx) *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ viral *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.othermenu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Other Menu 』⏤͟͟͞͞★
╎│❦ ping *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ paptt *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ alkitab *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ totalfitur *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ menu *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ myip *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ reportbug *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listpem *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ liststicker *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listimage *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listvideo *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listvn *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listbadword *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listpc *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listgc *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ owner *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ jadibot *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listjadibot *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ donate *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ friend *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ obfuscate *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ styletext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fliptext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tts *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ say *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ togif *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ toqr *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bass *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ blown *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ deep *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ earrape *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fast *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fat *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ nightcore *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ reverse *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ robot *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ slow *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ smooth *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ squirrel *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tinyurl *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tinyurl *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tovn *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ toaudio *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tomp3 *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tomp4*ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ toimg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ toonce *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ sticker *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ take *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
╎│❦ emoji *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ volume *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ebinary *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ dbinary *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ssweb *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ quoted *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ runtime *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ sound1 - sound161 *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.rpgmenu = (prefix, hituet) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Rpg Menu 』⏤͟͟͞͞★
╎│❦ kerja *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ adventure *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ jelajah *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fightnaga *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fightkucing *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fightphonix *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fightgriffin *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fightkyubi *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fightcentaur *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ nabung *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ mining *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bankcek *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ maling *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ banknabung *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ banktarik *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ berkebon *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ crafting *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bet *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bonus *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ buah *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ nebang *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bekerja *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bansos *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ taxy *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ mulung *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ berburu *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ polisi *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ berdagang *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ rampok *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bunuh *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ collect *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ mancing *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ repair *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ feed *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fight *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gajian *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ upgrade *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ transfer *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ shop *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ selectskill *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ sampah *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ roket *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ojek *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ nguli *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ pasar *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ rob *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ referal *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ petshop *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kolam *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ koboy *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ leaderboard *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kerja *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.gamemenu = (prefix, hituet) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Game Menu 』⏤͟͟͞͞★
╎│❦ tebakkata *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tebaktebakan *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tebaklirik *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tebakgambar *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tebaklagu *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tebakkimia *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ asahotak *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ siapaaku *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ susunkata *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tekateki *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tebakbendera *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tebakbenderav2 *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tebakkabupaten *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ caklontong *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ family100 *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ werewolf *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★`}

global.downloadmenu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Download Menu 』⏤͟͟͞͞★
╎│❦ tiktok *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tiktokslide*ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tiktokaudio *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ytsearch *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ttsearch *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ teraboxdl *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ snackvideo *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ capcutdl *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ play *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ytmp3 *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ytmp4 *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ google *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ imdb *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ weather *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ wanumber *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ instagram *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ facebook *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ twittervid *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ telestick *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
╎│❦ spotify *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
╎│❦ gitclone *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ happymod *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gdrive *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ pinterest *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ringtone *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.groupmenu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Group Menu 』⏤͟͟͞͞★
╎│❦ autoaigc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ autosimi *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ nanochat *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ mute *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ setwelcome *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ setleft *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ welcome on/of *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antilink *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antiwame *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ linkgc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ invite *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ ephemeral *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ delete *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ setppgroup *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ delppgroup *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ setname *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ setdesc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ add *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ kick *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ promote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ demote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ hidetag *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ totag *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ tagall *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ editinfo *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ opentime *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ closetime *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ resetlink *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ getbio *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ vote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ upvote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ downvote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ checkvote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ delvote *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ autostickergc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antilinkgc *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antiwame *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antilinkall *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antilinktiktok *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antilinkfb *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antilinktwitter *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antilinkig *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antlinktg *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antilinkytvid *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antilinkytch *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antivirus *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ antitoxic *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ nsfw *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎│❦ react *ɢʀᴏᴜᴘ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.funmenu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Fun Menu 』⏤͟͟͞͞★
╎│❦ smeme *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ define *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ qc *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lyrics *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tictactoe *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ suit *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ math *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fact *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ truth *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ dare *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ couple *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ soulmate *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ stupidcheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ handsomecheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ uncleancheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ hotcheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ smartcheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ greatcheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ evilcheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ dogcheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ coolcheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ waifucheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ awesomecheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gaycheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cutecheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lesbiancheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ hornycheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ prettycheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lovelycheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ uglycheck *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ pick *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ quotes *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ can *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ is *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ when *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ where *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ what *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ how *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ rate *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cry *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kill *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ hug *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ pat *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lick *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ kiss *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bite *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ yeet *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bully *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bonk *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ wink *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ poke *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ nom *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ slap *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ smile *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ wave *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ awoo *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ blush *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ smug *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ glomp *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ happy *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ dance *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cringe *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cuddle *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ highfive *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ shinobu *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ handhold *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ spank *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tickle *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ avatar *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ feed *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ foxgirl *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gecg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ checkme *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ sound1 - sound161 *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.stalkermenu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Stalker 』⏤͟͟͞͞★
╎│❦ igstalk *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ffstalk *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ mlstalk *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ npmstalk *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ghstalk *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.stickermenu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Sticker 』⏤͟͟͞͞★
╎│❦ goose *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ woof *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ 8ball *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lizard *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ meow *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gura *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ doge *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ patrick *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lovestick *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.databasemenu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Database 』⏤͟͟͞͞★
╎│❦ setcmd *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ delcmd *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listcmd *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lockcmd *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ addmsg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ delmsg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ getmsg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listmsg *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.aimenu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 OpenAI 』⏤͟͟͞͞★
╎│❦ openai *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ai *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bard *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ocr *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ jadizombie *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ blackboxai *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ photoleapai *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lamaai *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ aivo *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gemini *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ text2img *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ absolutely *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ dalle *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bingimg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gptimg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ anything *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ hdvid *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cai *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ youai *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ remini *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ jadianime *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ removebg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ nulis *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.quotesmenu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 QUOTES-MENU 』⏤͟͟͞͞★
╎│❦ quotesanime *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ quotesbacot *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ quotesbucin *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ quotesmotivasi *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ quotesgalau *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ quotesgombal *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ quoteshacker *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ quotesbijak *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}
 
global.storemenu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★
 
╭랜࿆───『 STORE-MENU』⏤͟͟͞͞★
╎│❦ list *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ addlist *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ dellist *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ update *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ jeda *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tambah *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kurang *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kali *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bagi *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ delsetdone *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ changedone *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ setdone *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ delproses *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ changeproses *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ setproses *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ proses <reply chat> *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ done <reply chat> *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.anonymousmenu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★
 
╭랜࿆───『 ANONYMOUS-MENU 』⏤͟͟͞͞★
╎│❦ anonymouschat *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ start *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ next *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ stop *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ sendprofile *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ menfess *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ confess *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ balasmenfess *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tolakmenfess *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ stopmenfess *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.pushmenu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 PUSH-MENU 』⏤͟͟͞͞★
╎│❦ cekidgc *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ pushkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ pushkontakv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ pushkontakv3 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ pushkontakv4 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ savekontakv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ savekontakv2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ getkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ sendkontak *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ jpm *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ jpm2 *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.cpanelmenu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Cpanel - Menu 』⏤͟͟͞͞★
╎│❦ panel *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ listusr *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ delusr *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ listsrv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ delsrv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ tutorial *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ ramlist *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ premlist *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ addusr *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ addsrv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ updatesrv *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ suspend *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ unsuspend *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ createadmin *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎│❦ listadmin *ᴏᴡɴᴇʀ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 List - Panel 』⏤͟͟͞͞★
╎│❦ 1gb [user,nomor]
╎│❦ 2gb [user,nomor]
╎│❦ 3gb [user,nomor]
╎│❦ 4gb [user,nomor]
╎│❦ 5gb [user,nomor]
╎│❦ 6gb [user,nomor]
╎│❦ 7gb [user,nomor]
╎│❦ 8gb [user,nomor]
╎│❦ 9gb [user,nomor]
╎│❦ unli [user,nomor]
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.bugmenu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Bug & War 』⏤͟͟͞͞★
╎│❦ pmbug *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ delaybug *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ trollybug *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ docubug <nomer> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ bombug <nomer> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ lagbug <nomer> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ unlimitedbug <nomer> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ amountbug <jumlah> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ gcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ delaygcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ trollygcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ laggcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ bomgcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ unlimitedgcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎│❦ docugcbug <linkgc> *ᴘʀᴇᴍ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.randomphotomenu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Random Photo 』⏤͟͟͞͞★
╎│❦ aesthetic *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ coffee *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ wikimedia *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ wallpaper *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ art *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bts *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ dogwoof *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ catmeow *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lizardpic *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ goosebird *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ 8ballpool *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cosplay *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ hacker *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cyber *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gamewallpaper *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ islamic *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ jennie *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ jiso *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ satanic *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ justina *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cartoon *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ pentol *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cat *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ kpop *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ exo *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lisa *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ space *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ car *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ technology *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bike *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ shortquote *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ antiwork *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ hacking *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ boneka *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ rose *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ryujin *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ulzzangboy *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ulzzanggirl *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ wallml *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ wallphone *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ mountain *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ goose *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ profilepic *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ couplepic *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ programming *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ pubg *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ blackpink *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ randomboy *ғʀᴇᴇ ᴏɴʟʏ*  
╎│❦ randomgirl *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ hijab *ғʀᴇᴇ ᴏɴʟʏ*  
╎│❦ chinese *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ indo *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ japanese *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ korean *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ malay *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ thai *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ vietnamese *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.randomvideomenu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Random Video 』⏤͟͟͞͞★
╎│❦ tiktokgirl *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tiktoknukthy *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tiktokkayes *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tiktokpanrika *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tiktoknotnot *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tiktokghea *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tiktoksantuy *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ tiktokbocil *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.islamimenu= (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

┏━━⊱-『 Islami Menu 』⏤͟͟͞͞★
╎│❦ kisahnabi
╎│❦ asmaulhusna
╎│❦ bacaansholat
╎│❦ audiosurah
╎│❦ ayatkursi
╎│❦ doaharian
╎│❦ niatsholat
╎│❦ quotesislami
╎│❦ doatahlil
┗━━━━━━━━━━━━━━━━━━◧`}

global.textpromenu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Textpro Maker 』⏤͟͟͞͞★
╎│❦ sertifikattolol *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ attp *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ ttp *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ ktpmaker *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ carimusik *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ candy *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ christmas *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ 3dchristmas *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ sparklechristmas *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ deepsea *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ scifi *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ rainbow *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ waterpipe *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ spooky *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ pencil *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ circuit *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ discovery *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ metalic *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ fiction *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ demon *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ transformer *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ berry *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ thunder *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ magma *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ 3dstone *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ neonlight *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ glitch *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ harrypotter *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ brokenglass *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ papercut *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ watercolor *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ multicolor *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ neondevil *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ underwater *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ graffitibike *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ snow *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ cloud *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ honey *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ ice *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ fruitjuice *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ biscuit *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ wood *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ chocolate *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ strawberry *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ matrix *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ blood *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ dropwater *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ toxic *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ lava *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ rock *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ bloodglas *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ hallowen *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ darkgold *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ joker *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ wicker *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ firework *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ skeleton *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ blackpink *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ sand *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ glue *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ 1917 *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ leaves *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ retro *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ pornhub *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ 8bit *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ batman *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ 3dbox *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lion *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ 3davengers *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ window *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ 3dspace *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ bokeh *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ holographic *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ thewall *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ carbon *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ whitebear *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ metallic *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ steel *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ fabric *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ ancient *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ marvel *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.photooxymenu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 PhotoOxy Maker 』⏤͟͟͞͞★
╎│❦ shadow *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ write *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ romantic *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ burnpaper *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ smoke *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ narutobanner *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ love *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ undergrass *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ doublelove *ғʀᴇᴇ ᴏɴʟʏ* 
╎│❦ coffecup *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ underwaterocean *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ smokyneon *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ starstext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ rainboweffect *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ balloontext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ metalliceffect *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ embroiderytext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ flamingtext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ stonetext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ writeart *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ summertext ??
╎│❦ wolfmetaltext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ nature3dtext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ rosestext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ naturetypography *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ quotesunder *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ shinetext *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.ephoto360menu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Ephoto360 Maker 』⏤͟͟͞͞★
╎│❦ glitchtext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ writetext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ advancedglow *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ typographytext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ pixelglitch *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ neonglitch *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ flagtext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ flag3dtext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ deletingtext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ blackpinkstyle *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ glowingtext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ underwatertext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ logomaker *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ cartoonstyle *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ papercutstyle *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ watercolortext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ effectclouds *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ blackpinklogo *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ gradienttext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ summerbeach *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ luxurygold *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ multicoloredneon *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ sandsummer *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ galaxywallpaper *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ 1917style *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ makingneon *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ royaltext *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ freecreate *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ galaxystyle *ғʀᴇᴇ ᴏɴʟʏ*
╎│❦ lighteffects *ғʀᴇᴇ ᴏɴʟʏ*
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

global.nsfwmenu = (prefix) => {
return`╭랜࿆───『 *MENU INFO* 』⏤͟͟͞͞★
╎│❦ *ᴏᴡɴᴇʀ ᴏɴʟʏ* ➪ ᴏᴡɴᴇʀ
╎│❦ *ɢʀᴏᴜᴘ ᴏɴʟʏ* ➪ ɢʀᴏᴜᴘ
╎│❦ *ғʀᴇᴇ ᴏɴʟʏ*     ➪ ɢʀᴀᴛɪs
╎│❦ *ᴘʀᴇᴍ ᴏɴʟʏ*   ➪ ᴘʀᴇᴍ
╎ ⃟ꕥ________________⏤͟͟͞͞★

╭랜࿆───『 Anime NSFW 』⏤͟͟͞͞★
╎│❦ hentai *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ gifhentai *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ gifblowjob *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ hentaivid *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ hneko *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ nwaifu *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ animespank *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ trap *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ gasm *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ ahegao *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ ass *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ bdsm *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ blowjob *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ cuckold *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ cum *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ milf *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ eba *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ ero *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ femdom *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ foot *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ gangbang *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ glasses *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ jahy *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ masturbation *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ manga *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ neko-hentai *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ neko-hentai2 *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ nsfwloli *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ orgy *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ panties *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
╎│❦ pussy *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ tentacles *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ thighs *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ yuri *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ zettai *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*
╎│❦ xnxxsearch *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
╎│❦ xnxxdl *ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* 
╎ ⃟ꕥ________________⏤͟͟͞͞★
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
