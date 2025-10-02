import Usuario, { IUsuario } from "@/models/Usuario";
import OrdemServico, { IOrdemServico } from "@/models/OrdemServico";
import connectMongo from "@/services/mongodb";


//getAll
export const getAllUsuario = async() =>{
    await connectMongo();//estabelece conexãocom o BD
    const usuarios = await Usuario.find([]); //listar todos os usuarios da coleção
    return usuarios;
}

//getOne
export const getOneUsuario = async(id:string) => {
     await connectMongo();
     const usuario = await Usuario.findById(id); //listar o usuario pelo id
     return usuario;
}

//create
export const createUsuario = async(data: Partial<IUsuario>) =>{
    await connectMongo();
    const novoUsuario = new Usuario(data); //cria o usuário
    const novoUsuarioId = novoUsuario.save(); //salva o usuário no BD
    return novoUsuarioId;
}

//update
export const updateUsuario = async (id:string, data:Partial<IUsuario>) => {
    await connectMongo();
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(id, data, {new:true});
    return usuarioAtualizado;    
}

//delete
export const deleteUsuario = async (id:string) =>{
    await connectMongo();
    await Usuario.findByIdAndDelete(id);
}