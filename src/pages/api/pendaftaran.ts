import type { APIRoute } from "astro";
import { validation, type FormSchema } from "src/form/form-logic";

export const POST: APIRoute = async ({ request }) => {
    const data = Object.fromEntries(await request.formData()) as unknown as FormSchema;

    return new Response(
        JSON.stringify({ valid: validation(data) }),
        { status: 200 }
    );
};