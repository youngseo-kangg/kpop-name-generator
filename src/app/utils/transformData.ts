/**
 * 스프레드시트 데이터를 지정된 타입으로 변환하는 유틸리티 함수
 * @param headers 스프레드시트 헤더 행
 * @param data 변환할 데이터 행들
 * @returns 변환된 데이터 배열
 */
export function transformData<T extends Record<string, any>>(
    headers: string[],
    data: string[][]
): T[] {
    return data.map((row: string[]) => {
        return headers.reduce((obj: Partial<T>, header: string, index: number) => {
            const value = row[index];
            // T 타입의 해당 필드 타입을 가져옴
            const fieldType = ({} as T)[header as keyof T];
            
            // 타입에 따라 값을 변환
            if (typeof fieldType === 'number') {
                obj[header as keyof T] = Number(value) as any;
            } else if (typeof fieldType === 'boolean') {
                obj[header as keyof T] = (value.toLowerCase() === 'true') as any;
            } else {
                obj[header as keyof T] = value as any;
            }
            
            return obj;
        }, {} as Partial<T>);
    }) as T[];
} 