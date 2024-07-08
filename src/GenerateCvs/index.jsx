import React from 'react';
import { saveAs } from 'file-saver';

const data = [
    { name: 'John', age: 28, email: 'john@example.com' },
    { name: 'Jane', age: 22, email: 'jane@example.com' },
    { name: 'Mike', age: 32, email: 'mike@example.com' }
];

const convertToCSV = (data) => {
    const csvArray = [];
    // Добавляем заголовки
    csvArray.push(Object.keys(data[0]).join(','));

    // Добавляем данные
    data.forEach((item) => {
        const row = Object.values(item)
            .map((val) => `"${val}"`)
            .join(',');
        csvArray.push(row);
    });

    return csvArray.join('\n');
};

const generateCSV = () => {
    const csvContent = convertToCSV(data);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'data.csv');
};
