export const DM_SANS = 'DM Sans';
export const ALLERTA_STENCIL = 'Allerta Stencil';
export const REGULAR = 400;
export const MEDIUM = 500;
export const BOLD = 700;

export class TypeFace {
    Weight: number;
    Size: string;
    LineHeight: string;
    ParagraphSpacing: string;

    constructor(Weight: number, Size: string, LineHeight: string, ParagraphSpacing: string) {
        this.Weight = Weight;
        this.Size = Size;
        this.LineHeight = LineHeight;
        this.ParagraphSpacing = ParagraphSpacing;
    }
}

