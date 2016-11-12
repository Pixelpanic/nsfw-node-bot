# **NS**lookup **F**or **W**ork bot

A simple nodeJS Telegram bot for NameServer lookup and ping. Why? Sometimes we are just too lazy to open up the terminal :)

VA/PT Passed by a brunch of psychopath from Telegram group [@din_lo_it](https://telegram.me/din_lo_it) , come and hava a decent chat with us!

author : [pixelpanic](@mysqli_real_escape_string)

Live demo : Telegram @nsfw_node_bot (built by nodeJS v6)

This bot is using telegram-node-bot-api as API warpper.

## Commands 

* ```/nslookup (domain)``` relevants to shall command `nslookup (domain)`
* ```/nslookupmx (domain)``` relevants to shall command `nslookup -type=mx (domain)`
* ```/nslookupsoa (domain)``` relevants to shall command `nslookup -type=soa (domain)`
* ```/nslookuptxt (domain)``` relevants to shall command `nslookup -type=txt (domain)`
* ```/nslookupall (domain)``` relevants to shall command `nslookup -type=soa -type=txt -type=mx (domain)`

It actually does ping as well! 3 Pings in a roll.
* ```/ping (domain/ip)``` relevants to shall command `ping -C 3 (domain)`


## Future Plans
Eh, no, really, no. 
Maybe WHOIS?
