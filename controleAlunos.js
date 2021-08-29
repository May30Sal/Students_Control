//Criando um sistema de contagem e classificação de alunos com diferentes laços

//Usando for 

let quantidadeDeAlunos = 7;

for (let aluno = 0; aluno <= quantidadeDeAlunos; aluno++) {
    if (aluno === 0) {
        console.log(`${aluno} zero`);
    } else if (aluno % 2 === 0) {
        console.log(`${aluno} par`);
    } else {
        console.log(`${aluno} ímpar`);
    }
}


//Usando while

//let aluno = 0;

// while (aluno <= quantidadeDeAlunos) {
//     if (aluno === 0) {
//         console.log(`${aluno} zero`);
//     } else if (aluno % 2 === 0) {
//         console.log(`${aluno} par`);
//     } else {
//         console.log(`${aluno} ímpar`);
//     }
//     aluno++;
// }


//Usando do/while

// do {
//     if (aluno === 0) {
//         console.log(`${aluno} zero`);
//     } else if (aluno % 2 === 0) {
//         console.log(`${aluno} par`);
//     } else {
//         console.log(`${aluno} ímpar`);
//     }
//     aluno++;
// } while (aluno <= quantidadeDeAlunos);


//Usando forOf

// let listaDeAlunos = ["Mayara", "Juh", "Wesley", "Oberdan", "Vanessa", "Caio", "João"];

// for (const aluno of listaDeAlunos) {
//     console.log(aluno);
// }


//Usando forEach

// let listaDeAlunos = ["Mayara", "Juh", "Wesley", "Oberdan", "Vanessa", "Caio", "João"];

// listaDeAlunos.forEach(aluno => {
//     console.log(aluno)
// });
