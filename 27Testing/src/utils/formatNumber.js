export function formatNumber(num){
    if(num>=100000) return `${(num/100000).toFixed(1)}M` 
    if(num>=1000) return `${(num/1000)}K`
    return num.toString()
}