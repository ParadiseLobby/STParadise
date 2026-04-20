---
name: photoshop-technique
description: Explain how to build a specific Photoshop effect, template, 
or action. Use whenever the user asks how to achieve a visual result, 
how to build a template, how to record an action, or asks about layers, 
masks, filters, blend modes. Triggers op "hoe maak ik", "hoe bouw ik", 
"welke filter", "Photoshop", "Smart Object", "action".
---

Structure every answer:
1. What you're actually building — 1 sentence mechanical principle
2. Required inputs (layers/selections/channels)
3. Output (what exists after)
4. Step-by-step with EXACT menu paths
5. Per filter: parameter + range + visual effect
6. Control knobs — 2-3 params the user can tweak
7. If Action-recordable: which steps need Dialog On + where STOPs go

Always specify:
- Layer naming in CAPS_SNAKE_CASE with prefix (FX__, MASK__, SRC__, EXPORT__)
- Blend modes with reasoning
- Values as ranges (0.4–1.2 px) not single numbers
- Order dependencies ("noise BEFORE blur")
- Destructive vs non-destructive flag
- Bit depth when relevant