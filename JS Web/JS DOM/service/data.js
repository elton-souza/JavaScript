export const removerDatasRepetidas = (data) =>{
    const datasUnicas = []

    data.forEach((data)=>{
        if(datasUnicas.indexOf(data.dataFormatada) == -1)
        datasUnicas.push(data.dataFormatada)
    })

    return datasUnicas
}

export const ordenaData = (data) =>{
    data.sort((a,b)=>{
        const data1 = moment(a,'DD/MM/YYYY').format('YYYYMMDD')
        const data2 = moment(b,'DD/MM/YYYY').format('YYYYMMDD')
        return data1 - data2
    })
}