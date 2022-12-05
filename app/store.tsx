import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let settingsStore = (set: any) => ({
  dark: false,
  toggleDarkMode: () => set((state: any) => ({ dark: !state.dark })),
});

let markdownStore = (set: any) => ({
  params: "",
  setParams: (e: any) => set((state: any) => ({ params: e.params })),

  markdown: { id: 0, userId: 0, title: "", content: "" },
  setMarkdown: (e: any) =>
    set((state: any) => ({
      markdown: {
        id: e.id,
        userId: e.userId,
        title: e.title,
        content: e.content,
      },
    })),
});

settingsStore = devtools(settingsStore);
settingsStore = persist(settingsStore, { name: "user_settings" });

markdownStore = devtools(markdownStore);

export const useSettingsStore = create(settingsStore);
export const useMarkdownStore = create(markdownStore);
