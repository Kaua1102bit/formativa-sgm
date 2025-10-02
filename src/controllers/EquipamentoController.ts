import Equipamento, { IEquipamento } from "@/models/Equipamento";
import connectMongo from "@/services/mongodb";

// Listar todos os equipamentos
export const getAllEquipamento = async () => {
    await connectMongo();
    const equipamentos = await Equipamento.find([]);
    return equipamentos;
}

// Buscar um equipamento por ID
export const getOneEquipamento = async (id: string) => {
    await connectMongo();
    const equipamento = await Equipamento.findById(id);
    return equipamento;
}

// Criar um novo equipamento
export const createEquipamento = async (data: Partial<IEquipamento>) => {
    await connectMongo();
    const novoEquipamento = new Equipamento(data);
    const novoEquipamentoId = await novoEquipamento.save();
    return novoEquipamentoId;
}

// Atualizar um equipamento existente
export const updateEquipamento = async (id: string, data: Partial<IEquipamento>) => {
    await connectMongo();
    const equipamentoAtualizado = await Equipamento.findByIdAndUpdate(id, data, { new: true });
    return equipamentoAtualizado;
}

// Deletar um equipamento
export const deleteEquipamento = async (id: string) => {
    await connectMongo();
    await Equipamento.findByIdAndDelete(id);
}
