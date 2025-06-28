
import { useCallback } from 'react';
import { Handle, Position, useReactFlow, NodeProps } from 'reactflow';

function CustomNode({ id, data }: NodeProps) {
  const { setNodes } = useReactFlow();

  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === id) {
          return { ...node, data: { ...node.data, label: value } };
        }
        return node;
      })
    );
  }, [id, setNodes]);

  return (
    <div style={{ border: '1px solid #777', padding: 10, background: 'white', borderRadius: 5 }}>
      <Handle type="target" position={Position.Top} />
      <input id="text" name="text" onChange={onChange} defaultValue={data.label} className="nodrag" />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default CustomNode;
