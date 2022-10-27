---
title: คู่มือใช้งาน Web MiniDisc ภาษาไทย
description: คู่มือใช้งาน Web MiniDisc แบบ step by step
---

## Install a driver with Zadig
ติดตั้งไดร์เวอร์ด้วยโปรแกรม Zadig

- ดาวน์โหลดโปรแกรม Zadig 👉 [💾คลิกที่นี่เพื่อดาวน์โหลดโปรแกรม](files/zadig.zip)
- แตกไฟล์และดับเบิ้ลคลิก **zadig.exe** เพื่อเปิดโปรแกรมขึ้นมา
- โปแกรมจะถามว่าจะให้ตรวจสอบการอัพเดทหรือไหม่ สามารถคลิก No ไปก่อนได้ครับ
  ![](images/web-minidisc-user-guide/update-policy.png)
- รอจนหน้าต่างหลักของโปรแกรมแสดงขึ้นมา
  ![](images/web-minidisc-user-guide/default-window.png)
- ต่อเครื่องเล่น Net MD เข้ากับเครื่องคอมพิวเตอร์ผ่านสาย USB
  (สำหรับเครื่องเล่นแบบ Deck หรือ Bookshelf ให้เปลี่ยน mode ไปเป็น Net MD ก่อน)
- **!!! สำคัญมาก** สำหรับเครื่องคอมพิวเตอร์ที่ยังไม่เคยติดตั้ง Net MD ไดร์เวอร์มาก่อน
  ตัวโปรแกรมจะแสดงชื่ออุปกรณ์ เช่น Net MD หรือ Net MD Walkman ให้โดยอัตโนมัติ

![](images/web-minidisc-user-guide/auto-select-device.png)

- ถ้าไม่มีอุปกรณ์ (Net MD หรือ Net MD Walkman) แสดงขึ้นมา ให้ทำตามขั้นตอนดังต่อไปนี้
  1. คลิก Options
  2. คลิก List All Devices
  3. คลิกเลือกอุปกรณ์ที่ได้เชื่อมต่อกับเครื่องคอมพิวเตอร์

![](images/web-minidisc-user-guide/list-all-devices.png)

- เมื่อได้เลือกอุปกรณ์ที่เชื่อมต่อกับเครื่องคอมพิวเตอร์เป็นที่เรียบร้อยแล้ว ให้
  - คลิกปุ่ม **Install Driver** สำหรับเครื่องคอมพิวเตอร์ไม่เคยติดตั้งไดร์เวอร์มาก่อน
    ![](images/web-minidisc-user-guide/install-driver.png)
  - หรือคลิกปุ่ม **Replace Driver** สำหรับเครื่องคอมพิวเตอร์ที่เคยติดตั้งไดร์เวอร์ไว้แล้ว
    ![](images/web-minidisc-user-guide/replace-driver.png)
- จะมีหน้าต่างแสดงขึ้นมาหลังจากได้ติดตั้งไดร์เวอร์เป็นที่เรียบร้อยแล้ว
  ![](images/web-minidisc-user-guide/driver-installed-successfully.png)

## Use Web MiniDisc
ใช้งาน Web MiniDisc

- เปิดเบราว์เซอร์ (Chrome หรือ Edge) แล้วไปที่ https://web.minidisc.wiki
- ที่เบราว์เซอร์จะแสดงหน้าแรกของ Web MiniDisc ขึ้นมา
  ![](images/web-minidisc-user-guide/home-page.png)

- ใส่แผ่น MD ที่จะเขียนเพลงเข้าไปในเครื่องเล่น
  1. คลิกปุ่ม **CONNECT**
  2. คลิกอุปกรณ์ที่ต่ออยู่
  3. คลิกปุ่ม **Connect**
  ![](images/web-minidisc-user-guide/connect-device.png)

- Web MiniDisc จะแสดง:
  - ชื่อเครื่องเล่นที่เชื่อมต่ออยู่
  - ชื่อแผ่น MD
  - รายชื่อเพลงทั้งหมดในแผ่น MD หรือแสดงเป็นแผ่นเปล่าถ้าไม่เพลงในแผ่นเลย
  ![](images/web-minidisc-user-guide/list-all-songs.png)

- คลิกปุ่มสีน้ำเงินขนาดใหญ่ที่มุมล่างขวาของจอ เลือกเพลงที่จะเขียนลงแผ่น MD (สามารถกดปุ่ม CTRL ค้างไว้ แล้วคลิกเลือกหลายเพลงได้)
  ![](images/web-minidisc-user-guide/select-songs.png)

- ปรับค่าในการอัดเพลง
  1. เลือกโหมดในการอัดเพลงเป็น SP, LP2 หรือ LP4
  2. กำหนดชื่อเพลงว่าจะใช้จากข้อมูลใด เช่น ชื่อไฟล์
  3. กดปุ่ม **OK** เพื่อเขียนเพลงลงแผ่น MD
  - เราสามารถกดปุ่ม **SHOW TRACK** เพื่อแสดงรายชื่อเพลงที่เลือกมาหรือเพิ่มเพลงที่จะเขียนเข้าไปอีก
    ![](images/web-minidisc-user-guide/upload-settings.png)
- Web MiniDisc ก็จะเริ่มแปลงเพลงที่ได้เลือกไว้และเขียนลงแผ่น MD

- เราสามารถคลิกเลือก **Notify when completed** เพื่อให้โปรแกรมแจ้งเตือนเมื่อเขียนแพลงทั้งหมดเสร็จแล้ว
  ![](images/web-minidisc-user-guide/recording.png)

- รอจนกว่า Web MiniDisc ได้เขียนเพลงที่ได้เลือกไว้ทั้งหมดลงแผ่น MD
- เข้าไปที่เมนู คลิกจุดเล็กๆ สามจุดที่มุมบนขวาของจอ แล้วคลิก **Exit** เพื่อออกจาก Web MiniDisc
- ถอดสาย USB ที่เชื่อมต่อเครื่องเล่นกับเครื่องคอมพิวเตอร์ และกดเล่นแผ่น MD ที่เครื่องเล่นได้เลย

![](images/web-minidisc-user-guide/menu.png)

## Use Web MiniDisc on a mobile phone
- เราสามารถใช้ Web MiniDisc เขียนเพลงลงแผ่น MD ผ่านมือถือโดยตรงกับเครื่องเล่นที่รองรับ Net MD
- ไม่ต้องลง driver
- ใช้ USB OTG adapter ได้เลย หรือ USB type C to mini USB
- เลือกเพลงที่อยู่ในมือถือได้เลย จะเลือกเพลงเดียวหรือเพลงทั้งหมดใน folder ก็ได้ เขียนหลายเพลงในครั้งเดียวได้
  1. กดปุ่ม + เพื่อเลือกเพลงที่จะเขียนลงแผ่น MD
    ![](images/web-minidisc-user-guide/mobile-select-add-music-files.png)

  2. เลือก Files action
    ![](images/web-minidisc-user-guide/mobile-select-files-action.png)

  3. เลือกโฟลเดอร์ที่เก็บเพลง
  4. เลือกไฟล์ทั้งหมด
    ![](images/web-minidisc-user-guide/mobile-select-all-music-files-in-a-folder.png)

  5. กดปุ่ม **OPEN** เพื่อนำไฟล์ทั้งหมดไปเขียนลงแผ่น
    ![](images/web-minidisc-user-guide/mobile-select-open-files.png)

  6. เลือก Recording mode
  7. แล้วกดปุ่ม OK เพื่อทำการเขียนแผ่น
    ![](images/web-minidisc-user-guide/mobile-select-recording-mode-and-ok.png)

- รอจนกว่า Web MiniDisc จะเขียนแผ่นเสร็จ
  ![](images/web-minidisc-user-guide/mobile-recording-status.png)

- ภาพแสดงการเขียน MD ผ่านโทรศัพท์มือถือ
  ![](images/web-minidisc-user-guide/web-minidisc-on-mobile-phone.png)

## Supported music files

| File extension | File name                                        | Developer                    |
|----------------|--------------------------------------------------|------------------------------|
| *.flac         | Free Lossless Audio Codec                        | Xiph.Org                     |
| *.aiff         | Audio Interchange File Format                    | Apple                        |
| *.wav          | WAVE Audio File                                  | Microsoft & IBM              |
| *.m4a          | MPEG-4 Audio File                                | Apple                        |
| *.mp3          | MP3 Audio File (Layer 3 audio compression)     | Moving Picture Experts Group |
| *.wma          | Windows Media Audio File                         | Microsoft                    |
| *.opus         | Opus Audio File                                  | Xiph.Org                     |
| *.webm         | WebM Video                                       | Google                       |
| *.weba         | WebM Audio File                                  | Google                       |
| *.ogg          | Ogg Vorbis Audio File                            | Xiph.Org                     |
| *.oga          | Ogg Vorbis Audio File                            | Xiph.Org                     |
| *.mid          | MIDI File (Musical Instrument Digital Interface) |                              |
| *.au           | Audacity Audio File                              | Audacity                     |
| *.m4v          | iTunes Video File                                | Apple                        |
| *.mp4          | MPEG-4 Video File                                | Moving Picture Experts Group |

## Hi-MD players/recorders
- เครื่องเล่น Hi-MD ที่รองรับเขียนแผ่นผ่าน Net MD ก็สามารถใช้ Web Minidisc ได้
- รุ่นที่รองรับมีดังนี้ Sony CMT-AH10, Sony LAM-X1, Sony MZ-DH10P, Sony MZ-NH1, Sony MZ-NH3D, Sony MZ-NH600/MZ-NH600D/MD-HUSB, Sony MZ-NH700/MZ-NHF800,
  Sony MZ-NH900, Sony MZ-RH1/MZ-M200, Sony MZ-RH10/MZ-M100, Sony MZ-RH710/MZ-DH710, Sony MZ-RH910/MZ-M10
- **ไม่สามารถเขียนแผ่นใน Hi-MD mode**
- **ไม่สามารถใช้ร่วมกับแผ่น Hi-MD**
- **เขียนได้แต่ SP, LP2, LP4 mode ลงบนแผ่น MD ธรรมดาเท่านั้น**
- **ไดร์เวอร์ที่ติดตั้งกับ Zadig มีปัญหากับ Windows OS และ Hi-MD players**
  แนะนำให้ไปใช้กับโทรศัพท์มือถือ เครื่องคอมพิวเตอร์ Linux หรือเครื่อง Mac แทน

## Credit & Reference
- คุณ [Puwanai Mahachinorot](https://www.facebook.com/pinghitz) ที่ได้แนะนำ Web MiniDisc
- [Using Web MiniDisc from MiniDisc Wiki](https://www.minidisc.wiki/guides/webminidisc)
- Music files from YouTube Audio Libary
