export default function Breadcrumb({items}) {
    return <div style={{ backgroundColor: 'periwinkle', color: 'aliceblue'}}>{items?.join(' / ')}</div>
}