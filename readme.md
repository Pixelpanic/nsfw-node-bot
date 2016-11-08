# **NS**lookup **F**or **W**ork bot

A simple nodeJS Telegram bot for NameServer lookup, sometime we just too lazy to open up the terminal.

Penetration Test Passed by a brunnch of psycopath from Telegram group [@din_lo_it](https://telegram.me/din_lo_it) , come and hava chat with us!

author : [pixelpanic](@mysqli_real_escape_string)

Live demo : Telegram @nsfw_node_bot (Running on Raspberry Pi 3 with nodeJS v6)

## Commands 

* ```/nslookup (domain)``` relevants to shall command `nslookup (domain)`
* ```/nslookupmx (domain)``` relevants to shall command `nslookup -type=mx (domain)`
* ```/nslookupsoa (domain)``` relevants to shall command `nslookup -type=mx (domain)`
* ```/nslookuptxt (domain)``` relevants to shall command `nslookup -type=txt (domain)`
* ```/nslookupall (domain)``` relevants to shall command `nslookup -type=soa -type=txt -type=mx (domain)`

It actually does ping also!
* ```/ping (domain/ip)``` relevants to shall command `ping -C 3 (domain)`


## Future Plans
Eh, no, really, no. 
Maybe WHOIS?
