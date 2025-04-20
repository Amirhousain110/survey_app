const fs = require('fs');
const path = require('path');

// تابع برای تولید عدد تصادفی در یک بازه
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// تابع برای تولید کد ملی تصادفی
function generateRandomNationalCode() {
    let code = '';
    for (let i = 0; i < 10; i++) {
        code += getRandomInt(0, 9);
    }
    return code;
}

// تابع برای تولید شماره تلفن تصادفی
function generateRandomPhoneNumber() {
    return '09' + Array.from({length: 9}, () => getRandomInt(0, 9)).join('');
}

// تابع برای تولید پاسخ تصادفی به سوالات
function generateRandomAnswer() {
    return getRandomInt(1, 5).toString();
}

// تابع برای تولید یک پاسخ کامل به پرسشنامه
function generateRandomSurveyResponse() {
    const firstNames = ['سارا', 'مریم', 'زهرا', 'فاطمه', 'علی', 'محمد', 'رضا', 'حسین'];
    const lastNames = ['احمدی', 'محمدی', 'حسینی', 'رضایی', 'کریمی', 'موسوی', 'جعفری', 'قاسمی'];
    const grades = ['هفتم', 'هشتم', 'نهم'];
    const academicStatus = ['خیلی خوب', 'خوب', 'متوسط', 'ضعیف'];

    return {
        firstName: firstNames[getRandomInt(0, firstNames.length - 1)],
        lastName: lastNames[getRandomInt(0, lastNames.length - 1)],
        nationalCode: generateRandomNationalCode(),
        PhoneNumber: generateRandomPhoneNumber(),
        age: getRandomInt(12, 15),
        grade: grades[getRandomInt(0, grades.length - 1)],
        academicStatus: academicStatus[getRandomInt(0, academicStatus.length - 1)],
        q1: generateRandomAnswer(),
        q2: generateRandomAnswer(),
        q3: generateRandomAnswer(),
        q4: generateRandomAnswer(),
        q5: generateRandomAnswer(),
        q6: generateRandomAnswer(),
        q7: generateRandomAnswer(),
        q8: generateRandomAnswer(),
        q9: generateRandomAnswer(),
        q10: generateRandomAnswer(),
        q11: generateRandomAnswer(),
        q12: generateRandomAnswer(),
        q13: generateRandomAnswer(),
        q14: generateRandomAnswer(),
        q15: generateRandomAnswer(),
        timestamp: new Date().toISOString()
    };
}

// تابع برای تبدیل پاسخ به فرمت CSV
function responseToCSV(response) {
    return Object.values(response).join(',');
}

// تابع اصلی برای تولید داده‌های تصادفی
function generateRandomData(numResponses = 50) {
    const csvPath = path.join(__dirname, 'public', 'survey_responses.csv');
    
    // خواندن هدر فایل CSV
    const header = 'firstName,lastName,nationalCode,PhoneNumber,age,grade,academicStatus,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,timestamp\n';
    
    // تولید پاسخ‌های تصادفی
    const responses = [];
    for (let i = 0; i < numResponses; i++) {
        responses.push(responseToCSV(generateRandomSurveyResponse()));
    }
    
    // نوشتن داده‌ها در فایل CSV
    const csvContent = header + responses.join('\n');
    fs.writeFileSync(csvPath, csvContent);
    
    console.log(`${numResponses} پاسخ تصادفی با موفقیت در فایل CSV ذخیره شد.`);
}

// اجرای برنامه
generateRandomData(50); 