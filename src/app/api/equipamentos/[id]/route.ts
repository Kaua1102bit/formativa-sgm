import { getOneEquipamento, updateEquipamento, deleteEquipamento } from "@/controllers/EquipamentoController";
import { NextRequest, NextResponse } from "next/server";

interface Parametro {
    id: string;
}

// PATCH - Atualizar equipamento
export async function PATCH(req: NextRequest, { params }: { params: Parametro }) {
    try { // corrigido aqui
        const { id } = params;
        const data = await req.json();
        const equipamentoAtualizado = await updateEquipamento(id, data);
        if (!equipamentoAtualizado) {
            return NextResponse.json({ success: false, error: "Not Found" });
        }
        return NextResponse.json({ success: true, data: equipamentoAtualizado });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
} 

// GET (one) - Buscar equipamento por ID
export async function GET({ params }: { params: Parametro }) {
    try { // corrigido aqui
        const { id } = params;
        const equipamento = await getOneEquipamento(id);
        if (!equipamento) {
            return NextResponse.json({ success: false, error: "Not Found" });
        }
        return NextResponse.json({ success: true, data: equipamento });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}

// DELETE - Remover equipamento
export async function DELETE({ params }: { params: Parametro }) {
    try { // corrigido aqui
        const { id } = params;
        await deleteEquipamento(id);
        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}
