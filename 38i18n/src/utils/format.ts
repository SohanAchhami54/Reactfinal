export const formatCurrency=(amount:number,locale:string,currency:string)=> 
    new Intl.NumberFormat(locale,{
        style:'currency',
        currency,
}).format(amount)

export const formatNumber=(value:number,locale:string)=>
    new Intl.NumberFormat(locale).format(value)

export const formatDate=(date:Date,locale:string)=>
    new Intl.DateTimeFormat(locale).format(date)



