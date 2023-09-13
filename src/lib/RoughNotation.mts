import { annotate } from 'rough-notation';
import type { RoughAnnotationConfig } from 'rough-notation/lib/model';

export function annotateElement(el: HTMLElement | string, config: RoughAnnotationConfig) {
    if (typeof el === 'string') {
        el = document.querySelector(el) as HTMLElement;
    }
    annotate(el, config).show();
}