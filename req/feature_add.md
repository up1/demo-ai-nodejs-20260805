# Feature :: พนักงานลงเวลาทำงาน

## User flow
1. พนักงานกรอกข้อมูล Employee ID หรือ username ของตนเอง
2. ทำการค้นหาข้อมูลใน database
3. ดึงข้อมูลพนักงานขึ้นมาแสดงผล
   * รหัสพนักงาน (Employee ID)
   * ชื่อ-นามสกุล (Full Name)
   * แผนก (Department)
4. พนักงานทำงานกดปุ่ม "ลงเวลา" เพื่อบันทึกเวลาทำงาน

## User Interface
* User mockup html from file `@page01.html`

## Input validation in table format
| Field | Validation | Message in User Interface |
|-------|------------|---------------------------|
| Employee ID | Required, must be a valid ID in the database | "กรุณากรอก Employee ID ที่ถูกต้อง" |
| Full Name | Required | "กรุณากรอกชื่อ-นามสกุล" |

## Database schema
* Table: `employees`
| Column | Type | Description |
|--------|------|------------|
| employee_id | VARCHAR(10) | รหัสพนักงาน |
| full_name | VARCHAR(100) | ชื่อ-นามสกุล |
| department | VARCHAR(50) | แผนก |
| last_log_time | DATETIME | เวลาที่พนักงานลงเวลาล่าสุด |


* Table: `work_logs`

| Column | Type | Description |
|--------|------|------------|
| log_id | INT | รหัสบันทึกเวลา (Primary Key) |
| employee_id | VARCHAR(10) | รหัสพนักงาน (Foreign Key) |
| log_time | DATETIME | เวลาที่พนักงานลงเวลา |

## Test cases in table format

| Test Case | Input | Expected Output 1  | Next Action | Expected Output 2 |
|-----------|-------|----------------|-------------|----------------|
| TC01 | Employee id   : "E12345" | Found user with Employee ID "E12345" and display full name=`somkiat pui` and department=`IT` | User clicks "ลงเวลา" button | Log time recorded successfully and display message "ลงเวลาเรียบร้อยแล้ว" |
   