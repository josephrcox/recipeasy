<script>
  import { onMount } from 'svelte'
  import { Editor } from '@tiptap/core'
  import StarterKit from '@tiptap/starter-kit'
  import Placeholder from '@tiptap/extension-placeholder'
  import { Bold, List, ListOrdered } from 'lucide-svelte'
  import BottomNav from './BottomNav.svelte'

  let { route, onNavigate } = $props()

  let saveStatus = $state('saved') // 'saved' | 'saving' | 'unsaved'
  let isBold = $state(false)
  let isBullet = $state(false)
  let isOrdered = $state(false)
  let saveTimer = null
  let editorEl
  let editor // not $state — we call methods on it from toolbar buttons

  const STORAGE_KEY = 'recipeasy-notes'

  function updateActiveStates(ed) {
    isBold = ed.isActive('bold')
    isBullet = ed.isActive('bulletList')
    isOrdered = ed.isActive('orderedList')
  }

  async function serverSave(html) {
    saveStatus = 'saving'
    try {
      await fetch('/api/notes', {
        method: 'PATCH',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes: html })
      })
      saveStatus = 'saved'
    } catch {
      saveStatus = 'unsaved'
    }
  }

  function toolbarAction(fn) {
    return (e) => {
      e.preventDefault() // keep editor focused
      fn()
    }
  }

  onMount(async () => {
    const cached = localStorage.getItem(STORAGE_KEY) ?? ''

    editor = new Editor({
      element: editorEl,
      extensions: [
        StarterKit,
        Placeholder.configure({
          placeholder: 'Write anything… ingredients to try, meal ideas, grocery reminders.',
        }),
      ],
      content: cached,
      onUpdate: ({ editor: ed }) => {
        const html = ed.getHTML()
        saveStatus = 'unsaved'
        localStorage.setItem(STORAGE_KEY, html)
        clearTimeout(saveTimer)
        saveTimer = setTimeout(() => serverSave(html), 1500)
        updateActiveStates(ed)
      },
      onSelectionUpdate: ({ editor: ed }) => updateActiveStates(ed),
    })

    updateActiveStates(editor)

    try {
      const res = await fetch('/api/notes', { credentials: 'include' })
      const data = await res.json()
      if (data.notes !== cached) {
        editor.commands.setContent(data.notes || '')
        localStorage.setItem(STORAGE_KEY, data.notes)
      }
      saveStatus = 'saved'
    } catch {}

    return () => {
      clearTimeout(saveTimer)
      editor.destroy()
    }
  })
</script>

<div class="page-with-nav">
  <div class="top-bar">
    <h1>Notes</h1>
    <span class="save-status" class:saving={saveStatus === 'saving'} class:unsaved={saveStatus === 'unsaved'}>
      {#if saveStatus === 'saving'}Saving…{:else if saveStatus === 'unsaved'}Unsaved{:else}Saved{/if}
    </span>
  </div>

  <div class="toolbar">
    <button class="tool-btn" class:active={isBold}
      onmousedown={toolbarAction(() => editor?.chain().focus().toggleBold().run())}>
      <Bold size={15} strokeWidth={2.5} />
    </button>
    <div class="tool-divider"></div>
    <button class="tool-btn" class:active={isBullet}
      onmousedown={toolbarAction(() => editor?.chain().focus().toggleBulletList().run())}>
      <List size={16} />
    </button>
    <button class="tool-btn" class:active={isOrdered}
      onmousedown={toolbarAction(() => editor?.chain().focus().toggleOrderedList().run())}>
      <ListOrdered size={16} />
    </button>
  </div>

  <div class="editor-wrap" bind:this={editorEl}></div>
</div>

<BottomNav {route} {onNavigate} />

<style>
  .top-bar {
    background: var(--surface);
    justify-content: space-between;
  }

  .save-status {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--text-3);
    transition: color 0.2s;
    flex-shrink: 0;
  }
  .save-status.saving { color: var(--text-3); }
  .save-status.unsaved { color: var(--accent); }

  /* Toolbar */
  .toolbar {
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 6px 12px;
    border-bottom: 1px solid var(--border);
    background: var(--surface);
    position: sticky;
    top: var(--top-bar);
    z-index: 9;
  }

  .tool-btn {
    width: 34px; height: 34px;
    border-radius: var(--radius-sm);
    border: none;
    background: none;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    color: var(--text-2);
    transition: background 0.12s, color 0.12s;
  }
  .tool-btn:hover { background: var(--bg); }
  .tool-btn.active { background: var(--accent-light); color: var(--accent); }

  .tool-divider {
    width: 1px;
    height: 20px;
    background: var(--border);
    margin: 0 4px;
  }

  /* Editor */
  .editor-wrap {
    min-height: calc(100dvh - var(--top-bar) - 49px - var(--nav-height) - var(--safe-bottom) - var(--safe-top));
  }

  .editor-wrap :global(.ProseMirror) {
    min-height: calc(100dvh - var(--top-bar) - 49px - var(--nav-height) - var(--safe-bottom) - var(--safe-top));
    padding: 20px 20px 40px;
    outline: none;
    font-size: 0.97rem;
    line-height: 1.7;
    color: var(--text);
    user-select: text;
    -webkit-user-select: text;
  }

  .editor-wrap :global(.ProseMirror p.is-editor-empty:first-child::before) {
    content: attr(data-placeholder);
    float: left;
    color: var(--text-3);
    pointer-events: none;
    height: 0;
  }

  .editor-wrap :global(.ProseMirror p) {
    margin: 0 0 0.3rem;
  }

  .editor-wrap :global(.ProseMirror ul),
  .editor-wrap :global(.ProseMirror ol) {
    padding-left: 1.4rem;
    margin: 0 0 0.3rem;
  }

  .editor-wrap :global(.ProseMirror li) {
    margin-bottom: 0.15rem;
  }

  .editor-wrap :global(.ProseMirror li > p) {
    margin: 0;
  }

  .editor-wrap :global(.ProseMirror strong) {
    font-weight: 700;
  }
</style>
