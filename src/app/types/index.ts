/**
 * Represents the data structure for a K-pop name
 * 
 * 구글 시트에서 가져온 데이터 구조를 나타냅니다
 */
export type NameData = {
    /** English name / 영문 이름 */
    name: string;
    /** Korean name / 한글 이름 */
    kor_name: string;
    /** Explanation of the name / 이름에 대한 설명 */
    name_explanation: string;
    /** Generated K-pop style name / 생성된 K-pop 스타일 이름 */
    kpop_name: string;
    /** Type of the name (A-J) / 이름의 타입 (A-J) */
    type: string;
    /** Number of times this name has been generated / 이 이름이 생성된 횟수 */
    count: number;
};

/**
 * Enum representing different types of K-pop idol personalities
 * K-pop 아이돌의 다양한 성격 유형을 나타내는 열거형
 */
export enum NameType {
    /** Charismatic and strong leader-type / 카리스마 있고 강한 리더형 */
    A = 'A',
    /** Gentle and friendly type / 부드럽고 친근한 타입 */
    B = 'B',
    /** Creative and unique type / 창의적이고 독특한 타입 */
    C = 'C',
    /** Warm and sociable type / 따뜻하고 사교적인 타입 */
    D = 'D',
    /** Elite and sophisticated type / 엘리트적이고 세련된 타입 */
    E = 'E',
    /** Free-spirited and bright type / 자유롭고 밝은 타입 */
    F = 'F',
    /** Graceful and elegant type / 우아하고 고급스러운 타입 */
    G = 'G',
    /** High-energy and dynamic type / 활기차고 역동적인 타입 */
    H = 'H',
    /** Intellectual and refined type / 지적이고 세련된 타입 */
    I = 'I',
    /** Joyful and cheerful type / 즐겁고 경쾌한 타입 */
    J = 'J',
}

/**
 * Interface for detailed information about a name type
 * 이름 타입에 대한 상세 정보를 나타내는 인터페이스
 */
export interface NameTypeDetail {
    /** Main description of the type / 타입의 주요 설명 */
    description: string;
    /** List of sub-descriptions / 하위 설명 목록 */
    subDescription: string[];
    /** List of relevant emojis / 관련 이모지 목록 */
    emojis: string[];
}