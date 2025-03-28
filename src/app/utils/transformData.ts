type TypeMap = Record<string, 'string' | 'number' | 'boolean'>;

export function transformData<T extends Record<string, any>>(
    headers: string[],
    data: string[][],
    typeMap: TypeMap // 타입 정보를 매핑하여 제공
): T[] {
    return data.map((row: string[]) => {
        return headers.reduce((obj, header, index) => {
            const value = row[index];
            const expectedType = typeMap[header]; // 사전에 정의된 타입 매핑을 가져옴

            if (expectedType === 'number') {
                obj[header as keyof T] = Number(value) as any;
            } else if (expectedType === 'boolean') {
                obj[header as keyof T] = (value.toLowerCase() === 'true') as any;
            } else {
                obj[header as keyof T] = value as any;
            }

            return obj;
        }, {} as Partial<T>) as T;
    });
}