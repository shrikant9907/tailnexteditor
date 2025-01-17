# TailNextEditor

**TailNextEditor** is a lightweight, **Next.js-compatible rich text editor** designed specifically for projects using **Tailwind CSS**. It provides a simple and customizable editor component that integrates seamlessly with client-side rendering in Next.js applications.

---

## Features

- 🌐 **Next.js Friendly**: Designed for seamless integration with Next.js using dynamic imports (`ssr: false`).
- 💨 **Tailwind CSS**: Fully styled with Tailwind CSS, making it easy to match your project’s design system.
- ⚡ **Lightweight**: Minimal setup and dependency-free, using a native `contentEditable` div.
- 🔄 **State Management**: Easy-to-use `value` and `onChange` props for managing editor content.
- 🛠️ **Customizable**: Extend the functionality with your own toolbar, shortcuts, or additional features.

---

## Installation

Install TailNextEditor via npm:

``
npm install tailnexteditor
``

---

## Usage

Here’s how to use **TailNextEditor** in your **Next.js** project:

### 1. Import and Use the Component

Use dynamic imports to ensure the editor renders only on the client side.

``
import dynamic from 'next/dynamic';
import { useState } from 'react';

// Dynamically import TailNextEditor
const DynamicEditor = dynamic(() => import('tailnexteditor'), { ssr: false });

export default function Home() {
  const [editorValue, setEditorValue] = useState('');

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">TailNextEditor</h1>
      <DynamicEditor value={editorValue} onChange={setEditorValue} />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Editor Content:</h2>
        <div className="border p-4 mt-2 bg-gray-100">{editorValue}</div>
      </div>
    </div>
  );
}
``

### 2. Tailwind CSS Integration

The editor uses **Tailwind CSS** for styling. Ensure Tailwind CSS is installed and configured in your project. You can add custom styles to your Tailwind configuration file to extend the editor’s design.

---

## Props

| Prop       | Type     | Required | Description                                                                 |
|------------|----------|----------|-----------------------------------------------------------------------------|
| `value`    | `string` | Yes      | The current content of the editor.                                         |
| `onChange` | `func`   | Yes      | Callback function triggered when the content of the editor changes.        |

---

## Open Source and Collaboration

**TailNextEditor** is open-source and available for collaboration! 🎉  
Check out the GitHub repository: [TailNextEditor on GitHub](https://github.com/shrikant9907/tailnexteditor).

We welcome contributions, feedback, and suggestions. If you'd like to contribute:
1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Submit a pull request.

Join us in building a better editor for Next.js developers!

---

## Development

### Cloning the Repository

If you want to contribute or modify the editor:

``
git clone https://github.com/shrikant9907/tailnexteditor.git
cd tailnexteditor
npm install
``

### Running Locally

``
npm start
``

### Building the Package

``
npm run build
``

This will output the bundled file in the `dist/` folder, ready for publishing.

---

## License

**TailNextEditor** is licensed under the MIT License.

---

## Example Projects

Here are a few example projects that use **TailNextEditor**:

- [Example Next.js Blog](https://github.com/example/nextjs-blog-tailnexteditor)
- [Demo Application](https://github.com/example/tailnexteditor-demo)

---

**Made with ❤️ for Next.js developers.**
