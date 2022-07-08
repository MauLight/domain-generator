

  let pronoun = ['the','our','their','his','her'];
  let adj = ['subtle', 'eager','silent','dissapearing','strange','lovely','smart','beautiful'];
  let noun = ['clown','racist','murderer','demon','devourer','reader','character'];
  let domain = ['.com','.net','.org','.io']


function allWeb(arr, arr2, arr3, arr4) {
    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr2.length; j++) {

            for (let h = 0; h < arr3.length; h++) {
                
                for(let r = 0; r < arr4.length; r++) {
                    console.log(arr[i] + arr2[j] + arr3[h] + arr4[r] ) //placing console.log at the last loop gives it access to all parent loops.
                }
               
            }
        }
     }
}

allWeb(pronoun, adj, noun, domain)
