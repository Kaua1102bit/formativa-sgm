import { getAllOrdemServico, createOrdemServico } from "@/controllers/OrdemServicoController";
import { NextRequest, NextResponse } from "next/server";

// GET - Listar todas as ordens de serviço
export async function GET() {
    try { // corrigido aqui
        const ordens = await getAllOrdemServico();
        return NextResponse.json({ success: true, data: ordens });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}

// POST - Criar nova ordem de serviço
export async function POST(req: NextRequest) {
    try { // corrigido aqui
        const data = await req.json();
        const novaOrdem = await createOrdemServico(data);
        return NextResponse.json({ success: true, data: novaOrdem });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}
