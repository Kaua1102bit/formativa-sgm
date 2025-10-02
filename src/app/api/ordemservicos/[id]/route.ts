import { getOneOrdemServico, updateOrdemServico, deleteOrdemServico } from "@/controllers/OrdemServicoController";
import { NextRequest, NextResponse } from "next/server";

interface Parametro {
    id: string;
}

// PATCH - Atualizar ordem de serviço
export async function PATCH(req: NextRequest, { params }: { params: Parametro }) {
    try { // corrigido aqui
        const { id } = params;
        const data = await req.json();
        const ordemAtualizada = await updateOrdemServico(id, data);
        if (!ordemAtualizada) {
            return NextResponse.json({ success: false, error: "Not Found" });
        }
        return NextResponse.json({ success: true, data: ordemAtualizada });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}

// GET (one) - Buscar ordem de serviço por ID
export async function GET({ params }: { params: Parametro }) {
    try { // corrigido aqui
        const { id } = params;
        const ordem = await getOneOrdemServico(id);
        if (!ordem) {
            return NextResponse.json({ success: false, error: "Not Found" });
        }
        return NextResponse.json({ success: true, data: ordem });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}

// DELETE - Remover ordem de serviço
export async function DELETE({ params }: { params: Parametro }) {
    try { // corrigido aqui
        const { id } = params;
        await deleteOrdemServico(id);
        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}
