---
title: คู่มือติดตั้งและใช้งานโปรแกรม SonicStage แบบ step by step
---

# SonicStage installation instructions for Windows 10 64-bit

## 1. Prepare program and driver

เตรียมโปรแกรมและไดร์เวอร์

- ดาวน์โหลดโปรแกรม SonicStage 4.3 👉 [💾คลิกที่นี่เพื่อดาวน์โหลดโปรแกรม](files/SonicStage-4.3.zip)
- ดาวน์โหลดไดร์เวอร์ 👉 [💾คลิกที่นี่เพื่อดาวน์โหลดไดร์เวอร์](files/Sony-NetMD-Driver.zip)
  - เครื่องเล่น MD ที่ทดสอบแล้วว่าสามารถใช้งานได้กับไดร์เวอร์นี้
    - **portable:**
      - MZ-N920
      - MZ-NE810
    - **bookshelf**
      - LAM-Z05
      - CMT-M333NT
    - **deck**
      - MDS-S500
      - MDS-NT1

- ถ้าเบราว์เซอร์แจ้งว่าไฟล์ที่ดาวน์โหลดมาอาจจะมีอัตราย ให้คลิก **Keep** ดังในรูปด้านล่างนี้ (ตรงนี้ไม่ต้องกังวล ปลอดภัยครับ)
  ![](images/sonic-stage-manual/keep-downloaded-file.png)

- Unzip แตกไฟล์โปรแกรม SonicStage-4.3.zip
- ตัวอย่างโครงสร้างไฟล์ของโฟล์เดอร์ SonicStage-4.3
  ```sh
  SonicStage-4.3
  ├── Common/
  ├── Device/
  ├── Resource/
  ├── SonicStage/
  ├── DSetup.dll
  ├── ExtendSs.dll
  ├── SetupSS.exe 👈 ไฟล์สำหรับติดตั้งโปรแกรม
  └── SetupSS.ini
  ```

- Unzip แตกไฟล์ไดร์เวอร์ Sony-NetMD-Driver.zip
- ตัวอย่างโครงสร้างไฟล์ของโฟล์เดอร์ Sony-NetMD-Driver
  ```sh
  Sony-NetMD-Driver
  ├── NETMD760.sys
  ├── NETMDRH1.inf
  ├── Read me + supported MD models.txt
  └── netmd760.cat
  ```

## 2. Install SonicStage

ติดตั้งโปรแกรม SonicStage

- เข้าไปในโฟล์เดอร์ SonicStage-4.3 ที่แตกมาแล้ว ดับเบิ้ลคลิก **SetupSS.exe** เพื่อติดตั้งโปรแกรม
- คลิกปุ่ม **Next** หรือ **Yes** ไปเรื่อยๆ จนถึงหน้าสุดท้าย **จะมีข้อความแสดงว่าให้ Restart เครื่องคอมพิวเตอร์**
- คลิกปุ่ม **Done** เครื่องคอมพิวเตอร์จะ restart โดยอัตโนมัติ รอจนกว่าเครื่องคอมพิวเตอร์จะเปิดขึ้นมาพร้อมใช้งาน และทำตามขั้นตอนในหัวข้อต่อไป
<!-- ![](images/sonic-stage-manual/done-installing-sonic-stage-manual.png) -->

## 3. Disable driver signature enforcement

ทำการ Disable driver signature enforcement เพื่อทำให้สามารถอัพเดท Net MD ไดร์เวอร์ได้

- เลื่อนเมาส์ไปที่มุมล้างซ้ายของหน้าจอ คลิกไอคอนรูป **Windows**
- พิมพ์คำว่า **change advanced**
- คลิกเลือก **Change advanced startup options**.

  ![](images/sonic-stage-manual/change-advanced-startup-options.png)

- คลิกปุ่ม **Restart now** ที่อยู่ใต้ Advanced startup

  ![](images/sonic-stage-manual/advanced-startup-restart-now.png)

- เครื่องคอมพิวเตอร์จะ restart โดยอัตโนมัติ แล้วจะแสดงหน้าจอที่มีข้อความว่า **Choose an option** ให้คลิก **Troubleshoot**

  ![](images/sonic-stage-manual/disable-driver-signature-enforcement-at-boot-1.png)

- คลิก **Advanced Options**

  ![](images/sonic-stage-manual/disable-driver-signature-enforcement-at-boot-2.png)

- คลิก **Startup Settings**

  ![](images/sonic-stage-manual/disable-driver-signature-enforcement-at-boot-3.png)

- คลิก **Restart**

  ![](images/sonic-stage-manual/disable-driver-signature-enforcement-at-boot-4.png)

- เมื่อเครื่องคอมพิวเตอร์เปิดขึ้นมาแล้ว ให้กดปุ่มเลข 7 หรือ F7 ที่แป้นพิมพ์ เพื่อ Disable driver signature enforcement

  ![](images/sonic-stage-manual/disable-driver-signature-enforcement-at-boot-5.png)

- เครื่องคอมพิวเตอร์จะ restart โดยอัตโนมัติ หลังจากที่คอมพิวเตอร์เปิดขึ้นมาพร้อมใช้งานแล้ว เราก็จะสามารถอัพเดทไดร์เวอร์ให้กับเครื่องเล่น Net MD ได้

## 4. Update driver

อัพเดทไดร์เวอร์

- ต่อเครื่องเล่น Net MD เข้ากับเครื่องคอมพิวเตอร์ผ่านสาย USB (สำหรับเครื่องเล่นแบบ Deck หรือ Bookshelf ให้เปลี่ยน mode ไปเป็น Net MD ก่อน)
- เลื่อนเมาส์ไปที่ไอคอน Window ที่มุมล่างซ้ายของหน้าจอ แล้วคลิกขวา
- คลิกเลือก **Device Manager**

  ![](images/sonic-stage-manual/select-device-manager.png)

- หน้าจอ **Device Manager** จะแสดงขึ้นมา ให้เลื่อนเมาส์ไปที่ไอคอนที่มีข้อความ "Net MD" ดังรูปด้านล่างนี้

  ![](images/sonic-stage-manual/netmd-in-device-manager.png)

- คลิกขวาที่ไอคอน Net MD แล้วเลือก **Update driver**

  ![](images/sonic-stage-manual/select-update-driver.png)

- เลือก **Browser my computer for drivers**

- หน้า **Update Drivers - Net MD** จะแสดงขึ้นมา ให้คลิกปุ่ม **Browse**
- เลือกโฟลเดอร์ที่เก็บ Sony-NetMD-Driver ที่เราได้ดาวน์โหลดและแตกไฟล์ไว้แล้ว **!!! สำคัญมาก ถ้าเรายังไม่แตกไฟล์ หน้าต่างนี้จะมองไม่เห็นโฟล์เดอร์ของไดร์เวอร์**
- ในตัวอย่างนี้เราเก็บไดร์เวอร์ไว้ที่ This PC > Downloads > Sony-NetMD-Driver
- กด **OK** เพื่อเลือกโฟล์เดอร์
- กด **Next** เพื่ออัพเดทไดร์เวอร์

  ![](images/sonic-stage-manual/update-driver-steps.png)

- คลิกเลือก **Install this driver software anyway**

  ![](images/sonic-stage-manual/install-this-software-driver-anyway.png)

- เมื่ออัพเดทไดร์เวอร์เสร็จเรียบร้อยแล้ว จะมีข้อความ **Windows has successfully updated your driver**

  ![](images/sonic-stage-manual/update-driver-successfully.png)

**ถ้าท่านใดไม่สามารถติดตั้งไดร์เวอร์ที่ดาวน์โหลดไปได้ สามารถแจ้งมายังกลุ่ม [Minidisc Playground](https://www.facebook.com/groups/mdplayground) ทางเราจะได้ทำการแก้ไขให้ครับ**

## 5. Use SonicStage

ใช้งานโปรแกรม SonicStage

- เปิดใช้งานโปรแกรม SonicStage
- การเปิดใช้งานครั้งแรกจะมีการกำหนดค่าเริ่มต้น ให้คลิก Next ไปเรื่อยๆ ได้เลย
- เมื่อโปรแแกรมพร้อมใช้งานแล้ว ให้เลื่อนเมาส์ไปตรงข้อความ "Transfer"

  ![](images/sonic-stage-manual/hover-transfer.png)

- คลิกเลือก Net MD

  ![](images/sonic-stage-manual/select-netmd.png)

- ถ้าในเครื่องเล่นมีแผ่น MD ที่มีเพลงอยู่ ตัวโปรแกรมจะแสดงรายชื่อเพลงทั้งหมดในแผ่น MD นั้น

  ![](images/sonic-stage-manual/netmd-connected.png)

- ถ้าจะ copy เพลงจากเครื่องคอมพิวเตอร์ไปยังแผ่น MD ให้ลากเพลงไปวางในหน้าต่าง **Library** ด้านซ้ายมือได้เลย

  ![](images/sonic-stage-manual/transfer-music.png)

- คลิกปุ่มสีแดงที่มีลูกศรชี้ไปทางขวามือเพื่อเขียนเพลงลงแผ่น MD
  ![](images/sonic-stage-manual/transfer-music-button.png)

- รอจนกว่าเครื่องเล่นจะเขียนเพลงเสร็จ เพียงเท่านี้เราก็สามารถ copy เพลงผ่านเครื่องเล่นที่รองรับ Net MD ได้แล้ว

## Supported music files
- OpenMG Audio
- OpenMG
- ATRAC Advanced Lossless
- WAV
- MP3
- AAC (AACLC)
- HE-AAC
- WMA
- M3U ดึง file ทั้งหมดใน playlist ที่มีอยู่แล้ว ใช้ได้กับ MP3, WAV, และ WMA
 ![](images/sonic-stage-manual/supported-music-files.png)


## Credit & Reference
- คุณชาย Teerapong Kuchi Seeker, คุณ Parinya Jaipang, คุณอาทิตย์ สมวาที, คุณ Tanapon Sean Pochatan, คุณ Napadon Tang
- คุณ [Puwanai Mahachinorot](https://www.facebook.com/pinghitz)
- คุณ [Krit Methasit](https://www.facebook.com/krit.kritanusarn) ที่ช่วยทดสอบติดตั้งโปรแกรมตามคู่มือนี้ และให้คำแนะนำที่เป็นประโยชน์
- เพื่อนสมาชิกในกลุ่ม [Minidisc Playground (พื้นที่ของคนชอบเล่นเอ็มดี)](https://www.facebook.com/groups/mdplayground/)
- ข้อมูลจาก DoSomething ใน Youtube (https://youtu.be/euTfzqsm8YQ)
- ข้อมูลจาก https://www.techspace.co.th/kb/entry/412/
- ข้อมูลจาก https://archivisiondirectory.blogspot.com/2011/01/download-netmd-usb-drivers-for-your.html
- Valid MDS-S500 driver from https://forums.sonyinsider.com/files/file/142-netmd-driver-64-bit-win7-or-vista/
- ข้อมูลและรูปภาพจาก - information and images from
  https://www.tenforums.com/tutorials/156602-how-enable-disable-driver-signature-enforcement-windows-10-a.html


