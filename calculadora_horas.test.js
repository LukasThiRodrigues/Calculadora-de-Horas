const calculateHoursWorked = require('./calculadora_horas');

test('should calculate hours correctly when end time is before start time', () => {
    expect(calculateHoursWorked('17:00', '09:00')).toBe(16.0);
});

test('should calculate hours correctly with break time when end time is before start time', () => {
    expect(calculateHoursWorked('17:00', '09:00', '01:00')).toBe(15.0);
});


test('should calculate hours correctly on the same day', () => {
    expect(calculateHoursWorked('09:00', '17:00')).toBe(8.0);
});

test('should calculate hours correctly on the same day with break time', () => {
    expect(calculateHoursWorked('09:00', '17:00', '01:00')).toBe(7.0);
});

test('should calculate hours correctly with format H:mm', () => {
    expect(calculateHoursWorked('9:00', '17:00')).toBe(8.0);
    expect(calculateHoursWorked('9:00', '17:00', '01:00')).toBe(7.0);
});

test('should calculate hours correctly with format HHmm', () => {
    expect(calculateHoursWorked('0900', '1700')).toBe(8.0);
    expect(calculateHoursWorked('0900', '1700', '0100')).toBe(7.0);
});

test('should throw error for invalid time format', () => {
    expect(() => calculateHoursWorked('9.00', '17.00')).toThrow('Formato inválido. Use HH:mm, H:mm ou HHmm');
});
