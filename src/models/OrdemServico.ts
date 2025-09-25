//classe de modelagem de dados para OrdemServico

import mongoose, { Document, Model, Schema } from "mongoose";

export interface IOrdemServico extends Document{
    _id: string;
    titulo: string;
    descricao: string;
    tipoManutencao: string;
    status: string;
    dataSolicitada: Date,
    dataFinalizada: Date | null,
    idTecnico: string;
    idEquipamento: string
}

const OrdemServicoSchema:Schema<IOrdemServico> = new Schema({
    titulo: {type: String, required: true},
    descricao: {type: String, required: true},
    tipoManutencao: {type: String, enum: ["Preventiva", "emergencia", "preditiva"], required: true},
    status: {type: String, enum: ["ativo", "Inativo"], default: "ativo"},
    dataSolicitada: {type: Date, default: Date.now},
    dataFinalizada: {type: Date, default:null},
    idTecnico: {type: String, required: true},
    idEquipamento: {type: String, required: true}
    
});

const OrdemServico: Model<IOrdemServico> = mongoose.models.User
|| mongoose.model<IOrdemServico>("Ordem Serviço", OrdemServicoSchema);

export default OrdemServico;