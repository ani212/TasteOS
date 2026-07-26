import os

data_dir = "src/data"
hooks_dir = "src/hooks"
components_dir = "src/components"

# Fix TS1484 in data files
for filename in os.listdir(data_dir):
    if filename.endswith(".ts") and filename != "types.ts" and filename != "recipes.ts" and filename != "resources.ts" and filename != "glossary.ts":
        filepath = os.path.join(data_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        content = content.replace("import { DesignOption }", "import type { DesignOption }")
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

# Fix usePromptGenerator.ts
with open(f"{hooks_dir}/usePromptGenerator.ts", "r", encoding="utf-8") as f:
    content = f.read()
content = content.replace("import { DesignOption }", "import type { DesignOption }")
with open(f"{hooks_dir}/usePromptGenerator.ts", "w", encoding="utf-8") as f:
    f.write(content)

# Fix useLocalStorage.ts
with open(f"{hooks_dir}/useLocalStorage.ts", "r", encoding="utf-8") as f:
    content = f.read()
content = content.replace("import { useState, useEffect }", "import { useState }")
with open(f"{hooks_dir}/useLocalStorage.ts", "w", encoding="utf-8") as f:
    f.write(content)

# Fix SelectableCard.tsx
with open(f"{components_dir}/SelectableCard.tsx", "r", encoding="utf-8") as f:
    content = f.read()
content = content.replace("import { ReactNode }", "import type { ReactNode }")
with open(f"{components_dir}/SelectableCard.tsx", "w", encoding="utf-8") as f:
    f.write(content)

# Fix PromptBuilderBar.tsx
with open(f"{components_dir}/PromptBuilderBar.tsx", "r", encoding="utf-8") as f:
    content = f.read()
content = content.replace("import { cn } from '../lib/utils';\n", "")
with open(f"{components_dir}/PromptBuilderBar.tsx", "w", encoding="utf-8") as f:
    f.write(content)

# Fix RecipeCard.tsx
with open(f"{components_dir}/RecipeCard.tsx", "r", encoding="utf-8") as f:
    content = f.read()
content = content.replace("import { cn } from '../lib/utils';\n", "")
with open(f"{components_dir}/RecipeCard.tsx", "w", encoding="utf-8") as f:
    f.write(content)

# Fix App.tsx
with open("src/App.tsx", "r", encoding="utf-8") as f:
    content = f.read()
content = content.replace("import { BookOpen, Moon, Sun, ArrowRight, PenTool }", "import { BookOpen, Moon, Sun, PenTool }")
content = content.replace("onUseRecipe={(id) => {", "onUseRecipe={() => {")
with open("src/App.tsx", "w", encoding="utf-8") as f:
    f.write(content)
