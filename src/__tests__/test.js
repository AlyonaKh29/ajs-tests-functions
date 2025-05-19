import { showIndicatorHealth } from "../index.js";

describe('showIndicatorHealth', () => {
    test('should return "healthy", when health > 50', () => {
        expect(showIndicatorHealth({ name: 'Маг', health: 90 })).toBe('healthy');
        expect(showIndicatorHealth({ name: 'Воин', health: 51 })).toBe('healthy');
    });

    test('should return "wounded", when 15 < health <= 50', () => {
        expect(showIndicatorHealth({ name: 'Маг', health: 50 })).toBe('wounded');
        expect(showIndicatorHealth({ name: 'Воин', health: 16 })).toBe('wounded');
    });

    test('should return "critical", when health <= 15', () => {
        expect(showIndicatorHealth({ name: 'Маг', health: 15 })).toBe('critical');
        expect(showIndicatorHealth({ name: 'Воин', health: 0 })).toBe('critical');
        expect(showIndicatorHealth({ name: 'Лучник', health: -10 })).toBe('critical');
    });
});