
function DNAStrand(dna){
    let DNA = ''
    for( let i = 0; i < dna.length; i++){
        if (dna[i] == 'A'){
            DNA += 'T'
        }
        else if(dna[i]=='T'){
            DNA += 'A'
        }
        else if(dna[i]=='C'){
            DNA += 'G'
        }
        else if(dna[i] =='G'){
            DNA += 'C'
        }
        
    }
    return DNA
}

  console.log(DNAStrand('TATAGC'))