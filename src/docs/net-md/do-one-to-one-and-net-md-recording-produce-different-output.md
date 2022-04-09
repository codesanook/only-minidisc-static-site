---
title: การอัด 1:1 (digital input) และ Net MD (Web MiniDisc) ให้ผลลัพธ์ต่างกันในแบบที่เราฟังแล้วแยกออกหรือไม่
---

> ที่มา

ผมได้ทราบว่ามีแนวคิดที่ว่า อัด 1:1 ให้เสียงดีกว่า Net MD
ซึ่งผมเองคิดว่าถ้า ณ ปัจจุบัน หากเราต้องการฟังเพลงแบบเสียงใกล้เคียงกับเพลงต้นฉบับ (MD เป็น compression format)
การอัด 1:1 (digital input) และ Net MD (Web MiniDisc) ไม่ควรให้ผลลัพธ์ที่ต่างกัน ในแบบที่หูของเราสามารถแยกความต่างได้

ผมได้เขียนสรุปไปแล้วว่าทำไมในอดีต Net MD จึงเสียงไม่ดี สามารถคลิกเข้าไปอ่านกันได้ครับ [ทำไมในอดีต Net MD จึงเสียงไม่ดี](/net-md/why-did-net-md-not-produce-good-sound-quality-in-the-past)


> ทำไมเราไม่ควรคิดว่าอัด 1:1 analog เสียงดีกว่า Net MD

ถ้า input เป็น analog (2RCA, line in) เสียงที่ได้ต่างกันแน่ๆ แต่เราไม่สามารถใช้ประเด็นนี้ มาบอกว่าอัดแบบอัด 1:1 เสียงดีกว่า Net MD เพราะเหมือนการที่เราไปแก้ไขไฟล์ต้นฉบับ ไปปรับแต่ง EQ มาแล้ว ในทางตรงข้ามถ้าต้นทาง analog เป็นเครื่องเล่นไม่ดี อาจจะทำให้ input แย่กว่าไฟล์ต้นฉบับเสียอีก

เราควรมองว่าการอัด 1:1 analog ได้เสียงแบบที่ถูกจริตความชอบของตนเองมากกว่า เนื่องจากเป็นการฟังที่ปรับแต่งเพลงต้นฉบับไปแล้ว
การทำแบบนี้ไม่ต่างกับการที่เราเอาไฟล์ต้นฉบับ ไปปรับเสียงให้ตรงกับความชอบของเราด้วยโปรแกรมคอมพิวเตอร์ แล้วอัดต่อด้วย Net MD

> สรุปว่าการอัด 1:1 (digital input) และ Net MD ให้ผลลัพธ์ต่างกันในแบบที่เราฟังแล้วแยกออกหรือไม่

ถ้าเราอัด 1:1 (digital input) และ Net MD (Web MiniDisc) ด้วยเครื่องเล่นเดียวกัน ที่รองรับทั้ง digital input และ Net MD ด้วย SP recording mode ผลลัพธ์ที่ได้ต่างกันไหม
ตัวอย่างเช่น เราอาจจะใช้ Sony MDS-JB980, Sony MDS-JE780, Sony MDS-S500 เป็นเครื่องทดสอบ

- อัด 1:1 SP mode (digital input) ใช้ ATRACT compression implementation ของ Sony ในตัวเครื่องเล่น
- อัดผ่าน Web MiniDisc SP mode ใช้ ATRAC compression implementation ของ Sony ในตัวเครื่องเล่นเช่นเดียวกัน

จะเห็นได้ว่าทั้ง 2 วิธี ใช้ ATRAC compression implementation ตัวเดียวกัน แต่ด้วย input ที่มาจากคนละแบบ

- 1:1 จะมาจากเครื่องเล่นที่มี digital out และต่อกับ MD recorder ผ่านสาย optical หรือ Coaxial
- Net MD SP mode ใช้ input เป็น raw PCM file ที่มี 16bit depth, 44100Hz sampling frequency

การอัดทั้งสองแบบมี input ต่างกัน จึงอาจทำให้ผลลัพธ์ต่างกันอยู่บ้าง ไม่เหมือนแบบ bit by bit หรือ identical แต่ก็ไม่ถึงกับฟังแล้วบอกได้ว่าต่างกัน

กล่าวโดยสรุป ถ้าเราจำกัดตัวแปรต่างๆ ในการทดสอบให้เหมาะสม **เราไม่สามารถแยกความต่างของการอัดด้วย 1:1 (digital input) และ Net MD (Web MiniDisc) ด้วยการฟังได้**
ดังนั้นจะบอกว่า อัด 1:1 แล้วเสียงดีกว่า Net MD จึงไม่ถูกต้อง


> ด้วยเหตุนี้ ถ้าเรามี Net MD recorder อยู่แล้ว แนะนำให้ลองอัดเองแบบ Net MD ครับ เนื่องจากใช้งานได้ง่ายและสะดวก ให้เสียงไม่ต่างกับอัด 1:1 แต่ประหยัดเวลากว่ามาก

เนื้อหาอื่นๆ ที่มีประโยชน์

- [คู่มือใช้งาน Web MiniDisc](/net-md/web-mini-disc-user-guide)
- [ข้อดีของ Net MD](/net-md/advantages-of-net-md)
- [GitHub issue - Does ATRAC compression happen inside a Sony recorder?](https://github.com/cybercase/netmd-js/issues/32)
- [GitHub issue - Why does an MD device require a 16bit/44.1khz input file for recording in SP mode?](https://github.com/linux-minidisc/linux-minidisc/issues/77)
- [Discussion topic in MiniDisc Central group](https://www.facebook.com/groups/1172366263130102/posts/1612416652458392)
- [Discussion topic in Thailand TAPE-MD-CD-REC group](https://www.facebook.com/groups/732821726855196/posts/2482735481863803/)
