

## Assessment: Mesopotamian Arabic (acm) Translation Completeness

After thorough comparison, the `acm.ts` file actually has **all the same top-level namespaces** as `en.ts` (both have 119 namespace matches). The 8-line difference (1373 vs 1381) comes from some legal paragraphs being slightly condensed in translation.

### What is actually missing

The issue is not that `acm.ts` is incomplete -- it is that several **pages have not been internationalized at all** (they still use hardcoded English strings and do not call `t()`):

1. **FAQ page** (`src/pages/docs/FAQ.tsx`) -- All 15+ Q&A pairs are hardcoded English strings
2. **Donate page** (`src/pages/docs/Donate.tsx`) -- All labels, network names, and descriptions are hardcoded
3. **Brand Guidelines page** (`src/pages/docs/BrandGuidelines.tsx`) -- Title and description are hardcoded
4. **Blog page** and blog components -- Headers and UI text are hardcoded

### Plan

For each untranslated page, the work is two-fold:

1. **Add the namespace keys to `en.ts`** (e.g., `faq`, `donate`, `brandGuidelines`)
2. **Refactor the page component** to use `t()` calls instead of hardcoded strings
3. **Add the translated namespace to `acm.ts`** (and eventually all other language files)

I will tackle these one at a time, starting with the **FAQ page**, then **Donate**, then **Brand Guidelines**, adding both the English keys and Mesopotamian Arabic translations, and refactoring each component.

### Technical details

- Each page gets a new namespace block in both `en.ts` and `acm.ts`
- Components import `useLanguage` and replace all string literals with `t('namespace.key')` calls
- Array-based content (like FAQ items) will use indexed keys: `faq.q1`, `faq.a1`, etc.

