function codonToAminoAcids(codon) {
  const translation = {
    Methionine: ['AUG'],
    Phenylalanine: ['UUU', 'UUC'],
    Leucine: ['UUA', 'UUG'],
    Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
    Tyrosine: ['UAU', 'UAC'],
    Cysteine: ['UGU', 'UGC'],
    Tryptophan: ['UGG'],
    STOP: ['UAA', 'UAG', 'UGA'],
  }

  let aminoAcid = Object.keys(translation).find((amino, _, array) => translation[amino].includes(codon));

  if (aminoAcid === undefined) {
    throw new Error("Invalid codon")
  }
  return aminoAcid;
}

function translate(rnaSequence = '') {
  const validRNA = 'AUGUC'
  let codonArr = rnaSequence.match(/.{1,3}/g) || [];

  let translatedArr = [];

  for (let index = 0; index < codonArr.length; index++) {
    let codon = codonArr[index];
    let aminoAcid = codonToAminoAcids(codon);

    if (aminoAcid === 'STOP') {
      break;
    }
    translatedArr.push(aminoAcid);
  }

  return translatedArr;
}

module.exports = translate;