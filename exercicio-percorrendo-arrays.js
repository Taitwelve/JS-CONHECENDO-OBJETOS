const paciente = {
 nome: "James T.",
 idade: 30,
 email: "jt@email.com",
 identicacao: "Alpha01259859",
 funcao:"comandante",
 peso: 80.1,
 altura: 1.80,
 calcularIMC:function(){
       return (this.peso/(Math.pow(this.altura,2)))
 },
 nomeCompleto:function(){
   console.log(this.nome)
 }
}
for (let info in paciente) {
 console.log(info)
};
for (let info in paciente) {
  if (!(typeof paciente[info] === "object" || typeof paciente[info] === "function")) {
    console.log(`${info} ==> ${paciente[info]}`);
  }
}