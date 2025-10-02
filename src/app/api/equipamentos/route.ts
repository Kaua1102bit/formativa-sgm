import { getAllEquipamento, createEquipamento } from "@/controllers/EquipamentoController";
import { NextRequest, NextResponse } from "next/server";

// GET - Listar todos os equipamentos
export async function GET() {
    try { // corrigido aqui
        const equipamentos = await getAllEquipamento();
        return NextResponse.json({ success: true, data: equipamentos });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}

// POST - Criar novo equipamento
export async function POST(req: NextRequest) {
    try { // corrigido aqui
        const data = await req.json();
        const novoEquipamento = await createEquipamento(data);
        return NextResponse.json({ success: true, data: novoEquipamento });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}
