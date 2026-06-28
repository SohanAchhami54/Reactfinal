import { describe, expect, it } from "vitest";
import { formatNumber } from "./formatNumber";

describe('formatNumber',()=>{
    it('number less than 500',()=>{
        expect(formatNumber(500)).toBe('500') 
    })
    it('number greater than 1000',()=>{
        expect(formatNumber(10000)).toBe('10K')
    })
    it('number greater than 1M',()=>{
        expect(formatNumber(100000)).toBe('1.0M')
    })
})