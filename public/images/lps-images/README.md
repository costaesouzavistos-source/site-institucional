# Imagens Cinematográficas – LPs Costa & Souza

20 imagens exclusivas geradas em IA, 2 por LP (hero + seção "problema").
Cada uma alinhada 100% ao contexto específico da página.

## Mapeamento (arquivo → LP → uso)

| Arquivo | LP (rota) | Uso |
|---|---|---|
| `01-assessoria-hero.jpg` | `/assessoria-visto-americano` | Hero |
| `01-assessoria-problem.jpg` | `/assessoria-visto-americano` | Seção "O problema" |
| `02-como-tirar-hero.jpg` | `/como-tirar-visto-americano` | Hero |
| `02-como-tirar-problem.jpg` | `/como-tirar-visto-americano` | Seção "O problema" |
| `03-documentos-hero.jpg` | `/documentos-visto-americano` | Hero |
| `03-documentos-problem.jpg` | `/documentos-visto-americano` | Seção "O problema" |
| `04-especialista-hero.jpg` | `/especialista-visto-americano` | Hero |
| `04-especialista-problem.jpg` | `/especialista-visto-americano` | Seção "O problema" |
| `05-renovar-hero.jpg` | `/renovar-visto-americano` | Hero |
| `05-renovar-problem.jpg` | `/renovar-visto-americano` | Seção "O problema" |
| `06-criancas-hero.jpg` | `/visto-americano-criancas` | Hero |
| `06-criancas-problem.jpg` | `/visto-americano-criancas` | Seção "O problema" |
| `07-familia-hero.jpg` | `/visto-americano-familia` | Hero |
| `07-familia-problem.jpg` | `/visto-americano-familia` | Seção "O problema" |
| `08-goiania-hero.jpg` | `/visto-americano-goiania` | Hero |
| `08-goiania-problem.jpg` | `/visto-americano-goiania` | Seção "O problema" |
| `09-negado-hero.jpg` | `/visto-americano-negado` | Hero |
| `09-negado-problem.jpg` | `/visto-americano-negado` | Seção "O problema" |
| `10-214b-hero.jpg` | `/visto-negado-214b` | Hero |
| `10-214b-problem.jpg` | `/visto-negado-214b` | Seção "O problema" |

## Como aplicar no projeto do GitHub

1. Copie todas as imagens para `public/images/lps/` no seu projeto.
2. Em cada LP, use DUAS imagens diferentes (nunca a mesma repetida):
   - Hero: `/images/lps/01-assessoria-hero.jpg`
   - Bloco "problema": `/images/lps/01-assessoria-problem.jpg`
3. Sempre inclua `alt` descritivo em pt-BR.
4. No `<img>` do hero use `loading="eager"` e `fetchpriority="high"`.
   Nas demais, `loading="lazy"`.

## Recomendações adicionais (encontradas na análise das LPs)

- ❌ **Nunca repetir a mesma imagem 2× na mesma página** — quebra sensação de profissionalismo.
- ❌ Remover o uso de `IMG_5787-avatar.jpg` como imagem principal — é um retrato pessoal genérico, não serve como hero de landing page premium.
- ✅ Cada LP deve ter identidade visual PRÓPRIA (o que estas imagens resolvem).
- ✅ Manter paleta navy + gold em todas as fotos (todas foram geradas nessa paleta).
