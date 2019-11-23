import React from 'react';
const sizeButtons = [
    {name: 'small', size: 'cbtn-sm'},
    {name: 'default', size: ''},
    {name: 'large', size: 'cbtn-lg'}
]
const actionButtons = [
    {name: 'hover', action: ''},
    {name: 'active', action: 'active'},
    {name: 'disabled', action: 'disabled'},
    {name: 'loading', action: 'loading'},
    {name: 'loadingD', action: 'loadingD'}
]
const colorButtons = [
    {name: 'success', text: 'Success', color: 'cbtn-success', icon: 'fa fa-coffee'},
    {name: 'primary', text: 'Primary', color: 'cbtn-primary', icon: 'fa fa-anchor'},
    {name: 'secondary', text: 'Secondary', color: 'cbtn-secondary', icon: 'fa fa-angellist'},
    {name: 'danger', text: 'Danger', color: 'cbtn-danger', icon: 'fa fa-bug'},
    {name: 'warning', text: 'Warning', color: 'cbtn-warning', icon: 'fa fa-bluetooth'},
    {name: 'link', text: 'Link', color: 'cbtn-link', icon: 'fa fa-apple'}
]

function Button(props) {
    if (props.size) {
        return <li>
            {props.colors.map((color) =>
                <button type="button" key={color.name}
                        className={"cbtn " + color.color + " " + props.size}>{color.text}</button>
            )}
        </li>
    }
    if (props.action) {
        return <li>
            {props.action == 'active' &&
            <span>
                    {props.colors.map((color) =>
                        <button type="button" key={color.name}
                                className={"cbtn " + color.color + " " + props.action}>{color.text}</button>
                    )}
                    </span>
            }
            {props.action == 'disabled' &&
            <span>
                        {props.colors.map((color) =>
                            <button type="button" key={color.name} className={"cbtn " + color.color}
                                    disabled={props.action}>{color.text}</button>
                        )}
                    </span>
            }
            {props.action == 'loading' &&
            <span>
                        {props.colors.map((color) =>
                            <button type="button" key={color.name} className={"cbtn " + color.color}>
                              <span className="cbtn-spinner-border"></span>
                                {color.text}
                            </button>
                        )}
                    </span>
            }
            {props.action == 'loadingD' &&
            <span>
                        {props.colors.map((color) =>
                            <button type="button" key={color.name} className={"cbtn " + color.color}
                                    disabled={props.action}>
                              <span className="cbtn-spinner-border"></span>
                                {color.text}
                            </button>
                        )}
                    </span>
            }
        </li>


    }
    if (props.tag) {
        return <li>
            {props.colors.map((color) =>
                <a href="#" role="button" key={color.name} className={"cbtn " + color.color}>{color.text}</a>
            )}
        </li>
    }
    if (props.icons) {
        return <li>
            {props.colors.map((color) =>
                <button type="button" key={color.name} className={"cbtn " + color.color}>
                  <i className={color.icon}></i></button>
            )}
        </li>
    }
    if (props.iconsText) {
        return <li>
            {props.colors.map((color) =>
                <button type="button" key={color.name} className={"cbtn " + color.color}>
                  <i className={color.icon}></i>{' '}{color.text}</button>
            )}
        </li>
    }
    if (props.textIcons) {
        return <li>
            {props.colors.map((color) =>
                <button type="button" key={color.name} className={"cbtn " + color.color}>{color.text}{' '}
                  <i className={color.icon}></i></button>
            )}
        </li>
    }
    return <li>
        {props.colors.map((color) =>
            <button type="button" key={color.name} className={"cbtn " + color.color}>{color.text}</button>
        )}
    </li>

}


function ColorButtons() {
    return (
        <ul>
          <li>Color variations (default, success, warning, error, etc)</li>
          <Button colors={colorButtons}/>
        </ul>

    )
}
function SizeButtons(props) {
    return (
        <ul>
          <li>Three main sizes: "s", "m" and "l"</li>
            {props.sizes.map((size) =>
                <Button key={size.name} colors={colorButtons} size={size.size}/>
            )}
        </ul>
    )
}
function ActionButtons(props) {
    return (
        <ul>
          <li>Event states (hover, active, disabled, loading)</li>
            {props.actions.map((action) =>
                <Button key={action.name} colors={colorButtons} action={action.action}/>
            )}
        </ul>
    )
}
function ColorLinks() {
    return (
        <ul>
          <li>Cover a case when Button should be a link (anchor)</li>
          <Button colors={colorButtons} tag/>
        </ul>

    )
}
function IconButtons() {
    return (
        <ul>
          <li>Custom Button modifications (with icons)</li>
          <Button colors={colorButtons} icons/>
          <Button colors={colorButtons} iconsText/>
          <Button colors={colorButtons} textIcons/>
        </ul>
    )

}



function App() {
    return (
        <div>
          <SizeButtons sizes={sizeButtons}/>
          <ColorButtons/>
          <ActionButtons actions={actionButtons}/>
          <ColorLinks/>
          <IconButtons/>
        </div>
    )
}


export default App;
