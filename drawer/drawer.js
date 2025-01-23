import later from '../utils/lang/later'
import cloneDeep from '../utils/lang/cloneDeep'
import isFunction from '../utils/types/isFunction'
import isDOM from '../utils/types/isDOM'
import isHTML from '../utils/types/isHTML'
import addClass from '../utils/dom/addClass'
import removeClass from '../utils/dom/removeClass'
import html from '../utils/dom/html'
import createElement from '../utils/dom/createElement'
import zIndex from '../utils/dom/zIndex'
import on from '../utils/event/on'
import off from '../utils/event/off'

import paint from '../utils/icons/paint'
import icon from '../utils/icons/icon'

import Component from '../base/component'

import SYMBOLS from './symbols'

class Drawer extends Component {
  constructor(options) {
    super()

    this.name = 'drawer'
    this._default()

    this.zIndex = 0

    if (options) {
      this.initialize(options)
    }
  }

  _default() {
    this.attrs = cloneDeep(Drawer.DEFAULTS)
    this.title = ''
    this.closed = false

    this.$el = null
    this.$modal = null
    this.$header = null
    this.$title = null
    this.$close = null
    this.$main = null
    this.$footer = null
    this.$overlay = null

    return this
  }

  initialize(options) {
    let created

    this.attr(options)

    this.title = this.attr('title')
    created = this.attr('created')

    if (isFunction(created)) {
      created.call(this)
    }

    this.render().addListeners()
    return this
  }

  setTitle(title) {
    this.attr('title', title)
    this.title = title
    this.$title.innerHTML = title

    return this
  }

  isClosed() {
    return this.closed
  }

  render() {
    const mounted = this.attr('mounted')
    const size = this.attr('size')
    const placement = this.attr('placement')
    const hasClose = this.attr('hasClose')
    const hasOverlay = this.attr('hasOverlay')
    const hasOffset = this.attr('hasOffset')
    const hasPadding = this.attr('hasPadding')
    const autoHeight = this.attr('autoHeight')
    const overflow = this.attr('overflow')
    const customClass = this.attr('customClass')
    let mainClassName = 'outline-drawer__main'
    let $el
    let $modal
    let $header
    let $title
    let $close
    let $main
    let $footer
    let $overlay

    paint(SYMBOLS)

    this.zIndex = zIndex()

    $title = createElement(
      'h2',
      {
        className: 'outline-drawer__title'
      },
      this.title
    )
    this.$title = $title

    if (hasClose) {
      $close = createElement(
        'div',
        {
          className: 'outline-drawer__close'
        },
        icon('close', { iconSet: 'outline', size: 20 })
      )
      this.$close = $close
    }

    $header = createElement(
      'header',
      {
        className: 'outline-drawer__header'
      },
      [$title, $close]
    )
    this.$header = $header

    if (overflow === 'hidden') {
      mainClassName += ' overflow-hidden'
    }

    $main = createElement('div', {
      className: mainClassName
    })
    this.$main = $main

    if (!hasPadding) {
      addClass($main, 'outline-drawer_full')
    }

    $footer = createElement('footer', {
      className: 'outline-drawer__footer'
    })
    this.$footer = $footer

    $modal = createElement(
      'div',
      {
        className: `outline-drawer__modal outline-drawer_${placement} outline-drawer_${size} outline-drawer_closed`
      },
      [$header, $main, $footer]
    )
    this.$modal = $modal

    if (hasOffset) {
      addClass($modal, 'outline-drawer_offset')
    }

    if (autoHeight) {
      addClass($modal, 'outline-drawer_auto')
    }

    if (customClass) {
      addClass($modal, customClass)
    }

    if (hasOverlay) {
      $overlay = createElement('div', {
        className: 'outline-drawer__overlay'
      })
      this.$overlay = $overlay
    }

    $el = createElement(
      'div',
      {
        className: `outline-drawer`
      },
      [$modal, $overlay]
    )
    this.$el = $el
    document.body.appendChild($el)

    if (isFunction(mounted)) {
      mounted.call(this)
    }

    return this
  }

  erase() {
    this.$main.innerHTML = ''
    return this
  }

  _paint(content) {
    let $content = null

    if (isFunction(content)) {
      $content = content()
    } else if (isDOM(content)) {
      $content = content
    } else if (isHTML(content)) {
      $content = html(content)
    }

    if ($content) {
      this.$main.appendChild($content)
    }

    return this
  }

  _remove() {
    document.body.removeChild(this.$el)
    return this
  }

  refresh(content) {
    this.erase()._paint(content)
    return this
  }

  open() {
    const opened = this.attr('afterOpened')
    const $modal = this.$modal

    addClass(this.$el, 'outline-drawer_opened')
    removeClass($modal, 'outline-drawer_closed')
    addClass($modal, 'outline-drawer_opened')

    later(() => {
      this.closed = false

      if (isFunction(opened)) {
        opened.call(this)
      }
    })

    return this
  }

  close() {
    const closed = this.attr('afterClosed')
    const $modal = this.$modal

    removeClass($modal, 'outline-drawer_opened')
    addClass($modal, 'outline-drawer_closed')

    later(() => {
      removeClass(this.$el, 'outline-drawer_opened')
      this.closed = true

      if (isFunction(closed)) {
        closed.call(this)
      }
    })

    return this
  }

  toggle() {
    const afterToggle = this.attr('afterToggle')
    const closed = this.isClosed()

    if (closed) {
      this.open()
    } else {
      this.close()
    }

    if (isFunction(afterToggle)) {
      later(() => {
        afterToggle.call(this, closed)
      })
    }

    return this
  }

  destroy() {
    const afterDestroy = this.attr('afterDestroy')
    const beforeDestroy = this.attr('beforeDestroy')
    let index = this.zIndex

    if (isFunction(beforeDestroy)) {
      beforeDestroy.call(this)
    }

    this.removeListeners()._remove()._default()

    index -= 1
    zIndex(index)
    this.zIndex = 0

    if (isFunction(afterDestroy)) {
      afterDestroy.call(this)
    }

    return this
  }

  onClose() {
    this.close()
    return this
  }

  addListeners() {
    const hasClose = this.attr('hasClose')
    const hasOverlay = this.attr('hasOverlay')
    const closeOnClickModal = this.attr('closeOnClickModal')
    const $el = this.$el

    if (hasClose) {
      on($el, '.outline-drawer__close', 'click', this.onClose, this, true)
    }

    if (hasOverlay && closeOnClickModal) {
      on($el, '.outline-drawer__overlay', 'click', this.onClose, this, true)
    }

    return this
  }

  removeListeners() {
    const hasClose = this.attr('hasClose')
    const hasOverlay = this.attr('hasOverlay')
    const $el = this.$el

    if (!hasClose && !hasOverlay) {
      return this
    }

    off($el, 'click', this.onClose)

    return this
  }
}

Drawer.DEFAULTS = (() => {
  const OPTIONS = {
    placement: 'rtl',
    title: '标题',
    size: 'regular',
    hasClose: true,
    hasOverlay: true,
    hasOffset: false,
    hasPadding: true,
    autoHeight: true,
    closeOnClickModal: true,
    overflow: 'auto',
    created: null,
    mounted: null,
    afterClosed: null,
    afterOpened: null,
    afterScroll: null,
    beforeDestroy: null,
    afterDestroy: null,
    afterToggle: null
  }

  return cloneDeep(OPTIONS)
})()

export default Drawer
