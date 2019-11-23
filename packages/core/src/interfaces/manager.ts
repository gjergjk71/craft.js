import { Nodes, NodeEvents, NodeId } from "./nodes";
import { PlaceholderInfo } from "../events/interfaces";
import { useInternalManager } from "../manager/useInternalManager";
import { Placeholder } from "../render/RenderPlaceholder";

export type Options = {
  onRender: React.FC<{ render: React.ReactElement }>;
  renderPlaceholder: React.FC<Placeholder>;
  resolver: Resolver;
  enabled: boolean;
}

export type Resolver = Record<string, string | React.ElementType>;

export type ManagerEvents = Record<NodeEvents, NodeId> & {
  placeholder: PlaceholderInfo;
}

export type ManagerState = {
  nodes: Nodes;
  events: ManagerEvents;
  options: Options;
  // enabled: Boolean;
}

export type ConnectedManager<S = null> = useInternalManager<S>;