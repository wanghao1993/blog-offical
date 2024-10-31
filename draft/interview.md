---
title: 前端面试看这份就够了
date: 2024-10-21
key: "it-is-enough-for-frontend-interview"
categories: 面试
tags: 面试
keywords: js css 网络 vue http tcp/ip react vue-router react-router nextjs 前端面试
description: 这篇文章主要介绍了网页性能优化的原因及从输入 URL 到页面加载出来的过程和浏览器渲染流程，并提出了一些思考点和后续规划。具体内容如下：
---
import TOCInline from "@/components/TOCInline";

<TOCInline toc={props.toc} exclude="Overview" heading={4} />

## CSS

### 盒模型

在 CSS 中，所有的元素都被一个个的“盒子”包围着，理解这些“盒子”的基本原理，是我们使用 CSS 实现准确布局、处理元素排列的关键。

一个盒通常由内容，内边距，边框和外边距组成。普通盒模型中，一个元素的占位，是

>boxWidth = contentWidth + XPadding + XBorderWidth + XMargin
>boxHeight = contentHeight + YPadding + YBorderWidth + YMargin

```css
div {
    width: 400px;
    height: 100px;
    padding: 20px;
    border: 5px solid;
    margin: 10px;
}
```

那么这个div的占位宽度为:400+20+20+5+5 = 450, 高度为 100 + 10 + 10 + 5 + 5 = 130

还有IE的怪异盒模型，表现和 box-size：border-box一直，总的占位宽度为设置的宽度和高度，包含了border和padding在内。

此为块级元素相连的元素margin会合并，以大的为准，行内元素不会。

### BFC

块级格式上下文，BFC中的元素的样式变化不会对周围的元素的布局造成影响。这里我们就能通过bfc来解决，之前说到的margin重叠的问题。

那么如何才能触发BFC呢？主要有以下几种方案：

- 设置float
- overflow设置不为visible，scroll,auto,hidden
- display设置为inline-block，flex， grid，table等等
- position设置为absoulte，fixed

```css
p {
    width: 400px;
    height: 100px;
    padding: 20px;
    border: 5px solid;
    margin: 10px;
}
```

```html
<!-- before -->
    <p>
    p1
    </p>
    <p>
    p2
    </p>
    <!-- after -->
     <!-- div 触发了bfc,内容的布局对外部不会有影响,所以不会发生合并 -->
    <div style="overflow: auto">
        <p>
        p1
        </p>
    </div>
    <p>
    p2
    </p>
```

所以这里我们可以通过把其中一个元素添加一个父元素，且设置overflow：hidden，来避免margin重叠，因为设置。

### Position的值有哪些

Position属性有以下几种值：

1. **static**：默认值。元素按照正常的文档流进行定位，不受top, right, bottom, left属性的影响。
2. **relative**：相对定位。元素相对于其正常位置进行定位，可以使用top, right, bottom, left属性进行偏移。
3. **absolute**：绝对定位。元素相对于最近的已定位祖先元素进行定位，如果没有已定位的祖先元素，则相对于初始包含块进行定位。
4. **fixed**：固定定位。元素相对于浏览器窗口进行定位，即使页面滚动，元素也不会移动。
5. **sticky**：粘性定位。元素根据用户的滚动位置进行定位，在相对定位和固定定位之间切换。

```css
/* 示例 */
.element {
    position: relative;
    top: 10px;
    left: 20px;
}
```

### 水平垂直居中

在CSS中，实现水平垂直居中的方法有很多种，以下是几种常见的方案：

使用`flexbox`

```css
.container {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    height: 100vh; /* 父容器高度 */
}
```

```html
<div class="container">
    <div class="content">居中内容</div>
</div>
```

使用`grid`

```css
.container {
    display: grid;
    place-items: center; /* 水平垂直居中 */
    height: 100vh; /* 父容器高度 */
}
```

```html
<div class="container">
    <div class="content">居中内容</div>
</div>
```

使用绝对定位

```css
.container {
    position: relative;
    height: 100vh; /* 父容器高度 */
}
.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* 水平垂直居中 */
}
```

```html
<div class="container">
    <div class="content">居中内容</div>
</div>
```

使用`table-cell`

```css
.container {
    display: table;
    width: 100%;
    height: 100vh; /* 父容器高度 */
}
.content {
    display: table-cell;
    vertical-align: middle; /* 垂直居中 */
    text-align: center; /* 水平居中 */
}
```

```html
<div class="container">
    <div class="content">居中内容</div>
</div>
```

这些方法都可以实现水平垂直居中，根据具体需求选择合适的方案。

### 隐藏元素的方式和区别

在CSS中，有多种方式可以隐藏元素，每种方式都有其特定的应用场景和效果。以下是几种常见的隐藏元素的方式及其区别：

1. **display: none**：
    - **效果**：元素从文档流中完全移除，不占据任何空间。
    - **应用场景**：需要完全隐藏元素，并且不希望它占据任何空间时使用。
    - **注意事项**：元素及其子元素的所有事件监听器将被禁用。

    ```css
    .hidden {
        display: none;
    }
    ```

2. **visibility: hidden**：
    - **效果**：元素在文档中仍然占据空间，但不可见。
    - **应用场景**：需要隐藏元素，但希望它仍然占据空间时使用。
    - **注意事项**：元素的事件监听器仍然有效。

    ```css
    .hidden {
        visibility: hidden;
    }
    ```

3. **opacity: 0**：
    - **效果**：元素完全透明，但仍然占据空间。
    - **应用场景**：需要隐藏元素，但希望它仍然占据空间，并且希望保留其动画效果时使用。
    - **注意事项**：元素的事件监听器仍然有效。

    ```css
    .hidden {
        opacity: 0;
    }
    ```

4. **position: absolute; left: -9999px**：
    - **效果**：元素被移出可视区域，但仍然存在于文档中。
    - **应用场景**：需要隐藏元素，但希望它仍然存在于文档中，并且不影响布局时使用。
    - **注意事项**：元素的事件监听器仍然有效。

    ```css
    .hidden {
        position: absolute;
        left: -9999px;
    }
    ```

5. **clip-path: inset(100%)**：
    - **效果**：元素被裁剪，完全不可见，但仍然占据空间。
    - **应用场景**：需要隐藏元素，但希望它仍然占据空间，并且希望保留其动画效果时使用。
    - **注意事项**：元素的事件监听器仍然有效。

    ```css
    .hidden {
        clip-path: inset(100%);
    }
    ```

6. **height: 0; overflow: hidden**：
    - **效果**：元素高度为0，不可见，但仍然占据空间。
    - **应用场景**：需要隐藏元素的内容，但希望它仍然占据空间时使用。
    - **注意事项**：元素的事件监听器仍然有效。

    ```css
    .hidden {
        height: 0;
        overflow: hidden;
    }
    ```

每种隐藏方式都有其特定的应用场景和效果，根据具体需求选择合适的方式来隐藏元素。

### CSS3动画实现

```css
/* 定义淡入淡出的关键帧动画 */
@keyframes fadeInOut {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

/* 应用动画到元素 */
.fade-in-out {
    position: relative;
    width: 200px;
    animation: fadeInOut 3s infinite;
    /* 等于 */

    animation-duration: 3s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: fadeInOut;
    animation-timeline: none;
    animation-range-start: none;
    animation-range-end: none;
}
```

```html
<div class="fade-in-out">淡入淡出效果</div>
```

动画的关键在于动画的实现和持续时间,以及 播放方式.

#### animation属性

在CSS中，`animation`属性用于定义动画效果。以下是`animation`属性的各个参数及其解析：

1. **animation-duration**: 动画持续时间
    - **值**: 时间（如`3s`表示3秒）
    - **示例**: `animation-duration: 3s;`

2. **animation-timing-function**: 动画的时间函数
    - **值**: 预定义的时间函数（如`ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`等）
    - **示例**: `animation-timing-function: ease;`

3. **animation-delay**: 动画延迟时间
    - **值**: 时间（如`0s`表示无延迟）
    - **示例**: `animation-delay: 0s;`

4. **animation-iteration-count**: 动画循环次数
    - **值**: 数字或`infinite`（无限循环）
    - **示例**: `animation-iteration-count: infinite;`

5. **animation-direction**: 动画方向
    - **值**: `normal`（正常方向）, `reverse`（反向）, `alternate`（交替）, `alternate-reverse`（反向交替）
    - **示例**: `animation-direction: normal;`

6. **animation-fill-mode**: 动画结束后的状态
    - **值**: `none`, `forwards`, `backwards`, `both`
    - **示例**: `animation-fill-mode: none;`

7. **animation-play-state**: 动画播放状态
    - **值**: `running`（播放）, `paused`（暂停）
    - **示例**: `animation-play-state: running;`

8. **animation-name**: 动画名称
    - **值**: 动画的名称（如`fadeInOut`）
    - **示例**: `animation-name: fadeInOut;`

9. **animation-timeline**: 动画时间线
    - **值**: `auto`（自动）
    - **示例**: `animation-timeline: auto;`

10. **animation-range-start**: 动画范围起点
    - **值**: `normal`（正常）
    - **示例**: `animation-range-start: normal;`

11. **animation-range-end**: 动画范围终点
    - **值**: `normal`（正常）
    - **示例**: `animation-range-end: normal;`

通过这些参数，可以灵活地控制动画的各个方面，从而实现丰富的动画效果。

### Flex

### Grid


## JS

## 网络

## vue

### vue2的diff算法过程

vue2的diff算法过程是基于双端比较的算法。其核心思想是通过比较新旧虚拟DOM树的差异，找到最小的更新路径，从而高效地更新真实DOM。

具体过程如下：

1. **初始化阶段**：从两端开始，分别设置新旧虚拟DOM树的头尾指针。
2. **双端比较**：
    - 比较新旧虚拟DOM树的头部节点，如果相同，则更新节点并移动头部指针。
    - 比较新旧虚拟DOM树的尾部节点，如果相同，则更新节点并移动尾部指针。
    - 如果头部节点和尾部节点都不相同，则尝试交叉比较，即新虚拟DOM树的头部节点与旧虚拟DOM树的尾部节点比较，或者新虚拟DOM树的尾部节点与旧虚拟DOM树的头部节点比较。
3. **处理剩余节点**：如果新虚拟DOM树还有剩余节点，则将这些节点插入到旧虚拟DOM树中；如果旧虚拟DOM树还有剩余节点，则将这些节点从真实DOM中移除。

通过这种双端比较的方式，vue2能够高效地找到新旧虚拟DOM树的差异，并进行最小化的更新操作，从而提升性能。

### vue3的diff算法过程

vue3的diff算法过程相较于vue2有了较大的改进，主要体现在以下几个方面：

1. **静态标记**：vue3在编译阶段会对静态节点进行标记，从而在更新时可以跳过这些静态节点，减少不必要的比较和更新操作。
2. **优化的双端比较**：vue3的diff算法依然采用双端比较的策略，但在具体实现上进行了优化。例如，vue3会优先处理相同的头部和尾部节点，然后再处理中间部分的节点，从而减少比较次数。
3. **块级节点**：vue3引入了块级节点的概念，将相邻的静态节点合并为一个块，从而在更新时可以一次性处理这些节点，减少DOM操作的次数。
4. **Fragment支持**：vue3支持Fragment，可以在不引入额外DOM元素的情况下返回多个根节点，从而减少不必要的DOM层级。

具体过程如下：

1. **初始化阶段**：从两端开始，分别设置新旧虚拟DOM树的头尾指针。
2. **双端比较**：
    - 比较新旧虚拟DOM树的头部节点，如果相同，则更新节点并移动头部指针。
    - 比较新旧虚拟DOM树的尾部节点，如果相同，则更新节点并移动尾部指针。
    - 如果头部节点和尾部节点都不相同，则尝试交叉比较，即新虚拟DOM树的头部节点与旧虚拟DOM树的尾部节点比较，或者新虚拟DOM树的尾部节点与旧虚拟DOM树的头部节点比较。
3. **处理剩余节点**：如果新虚拟DOM树还有剩余节点，则将这些节点插入到旧虚拟DOM树中；如果旧虚拟DOM树还有剩余节点，则将这些节点从真实DOM中移除。

通过这些改进，vue3的diff算法在性能和效率上都有了显著提升，能够更高效地进行DOM更新操作。

## react

### React diff算法

React的diff算法过程主要分为两部分：单节点diff和多节点diff。其核心思想是通过分层比较和分块处理，找到最小的更新路径，从而高效地更新真实DOM。

### 单节点diff

单节点diff主要用于比较新旧虚拟DOM树的单个节点。具体过程如下：

1. **类型比较**：首先比较新旧节点的类型，如果类型不同，则直接替换旧节点。
2. **属性比较**：如果类型相同，则比较新旧节点的属性，找到不同的属性并进行更新。
3. **子节点比较**：最后比较新旧节点的子节点，递归进行diff操作。

### 多节点diff

多节点diff主要用于比较新旧虚拟DOM树的多个子节点。具体过程如下：

1. **列表比较**：React会对新旧节点列表进行比较，找到相同的节点并进行更新，不同的节点则进行插入或删除操作。
2. **唯一标识**：为了提高比较效率，React要求每个节点都有一个唯一的key，通过key来快速找到对应的节点。
3. **最小化操作**：React会通过最小化操作来减少DOM更新次数，例如移动节点而不是删除再插入。

具体过程如下：

1. **初始化阶段**：从头部开始，分别设置新旧虚拟DOM树的头部指针。
2. **头部比较**：比较新旧虚拟DOM树的头部节点，如果相同，则更新节点并移动头部指针。
3. **尾部比较**：比较新旧虚拟DOM树的尾部节点，如果相同，则更新节点并移动尾部指针。
4. **中间部分比较**：如果头部节点和尾部节点都不相同，则尝试通过key来找到对应的节点进行比较和更新。
5. **处理剩余节点**：如果新虚拟DOM树还有剩余节点，则将这些节点插入到旧虚拟DOM树中；如果旧虚拟DOM树还有剩余节点，则将这些节点从真实DOM中移除。

通过这种分层比较和分块处理的方式，React能够高效地找到新旧虚拟DOM树的差异，并进行最小化的更新操作，从而提升性能。

### Fiber架构

React Fiber是React 16引入的一种新的协调引擎，它的主要目标是提高React在处理大型应用时的性能和响应速度。Fiber架构通过将渲染工作分解成更小的任务块，并在任务之间进行优先级调度，从而实现更高效的更新和渲染。

### Fiber的核心概念

1. **Fiber节点**：Fiber节点是React元素的轻量级表示形式，每个Fiber节点对应一个React元素。Fiber节点包含了组件的类型、属性、状态等信息。
2. **工作单元**：Fiber将渲染工作分解成多个工作单元，每个工作单元对应一个Fiber节点。通过这种方式，React可以在渲染过程中暂停和恢复工作，从而更好地响应用户交互。
3. **优先级调度**：Fiber引入了优先级调度机制，根据任务的优先级来决定执行顺序。高优先级的任务（如用户输入）会优先执行，而低优先级的任务（如动画）会在空闲时间执行。

### Fiber的工作流程

1. **初始化阶段**：React会创建一个根Fiber节点，并将初始的React元素树转换为Fiber树。
2. **调度阶段**：React会根据任务的优先级，将Fiber节点分配到不同的工作单元中，并开始调度这些工作单元。
3. **渲染阶段**：React会遍历Fiber树，执行每个Fiber节点的渲染工作，并生成新的Fiber树。
4. **提交阶段**：React会将新的Fiber树与旧的Fiber树进行比较，找到差异并进行最小化的更新操作，最终更新真实DOM。

### Fiber的优势

1. **更高效的更新**：通过将渲染工作分解成更小的任务块，Fiber可以更高效地进行更新和渲染，减少卡顿和掉帧现象。
2. **更好的用户体验**：通过优先级调度机制，Fiber可以更好地响应用户交互，提高应用的响应速度和用户体验。
3. **支持异步渲染**：Fiber支持异步渲染，可以在不阻塞主线程的情况下进行渲染工作，从而提高性能。

通过引入Fiber架构，React在性能和用户体验上都有了显著提升，能够更高效地处理大型应用的更新和渲染工作。

##
