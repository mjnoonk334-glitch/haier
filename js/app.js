import { calculateSpare } from './calculations.js';

import {
    saveData,
    loadData,
    clearData
}
from './storage.js';

import {
    validateForm
}
from './validation.js';

import {
    exportExcel
}
from './export.js';

import {
    printReport
}
from './print.js';

const form =
    document.getElementById('mainForm');

window.addEventListener('load', () => {

    document.getElementById('reportDate')
        .valueAsDate = new Date();

    restoreData();

    bindEvents();
});

function bindEvents() {

    document.getElementById('h_prod')
        .addEventListener(
            'input',
            calculateSpare
        );

    document.getElementById('saveBtn')
        .addEventListener(
            'click',
            saveForm
        );

    document.getElementById('resetBtn')
        .addEventListener(
            'click',
            resetForm
        );

    document.getElementById('excelBtn')
        .addEventListener(
            'click',
            exportExcel
        );

    document.getElementById('printBtn')
        .addEventListener(
            'click',
            printReport
        );
}

function getFormData() {

    const data = {};

    form.querySelectorAll('input, textarea')
        .forEach(el => {

            data[el.id] = el.value;
        });

    return data;
}

function saveForm() {

    if (!validateForm()) {

        alert('يرجى تعبئة الحقول المطلوبة');

        return;
    }

    saveData(getFormData());

    alert('✅ تم الحفظ');
}

function restoreData() {

    const data = loadData();

    if (!data) return;

    Object.keys(data).forEach(key => {

        const el =
            document.getElementById(key);

        if (el) {

            el.value = data[key];
        }
    });

    calculateSpare();
}

function resetForm() {

    if (!confirm('مسح البيانات؟'))
        return;

    clearData();

    location.reload();
}
