import { mount } from '@vue/test-utils'
import Login from '@/components/login/login.vue'

describe('Login', () => {
  const wrapper = mount(Login);
  
  // To access the actual Vue instance via `wrapper.vm`
  const vm = wrapper.vm;

  it('expects the button to be enabled by default', () => {
    expect(vm.btnDisabled).toBeFalsy();
  });

  it('Checks that a title is found for the login page', () => {
    expect(wrapper.text()).toContain('Login to Customer Management System');
  })

  // it's also easy to check for the existence of elements
  it('check if page has a button', () => {
    expect(wrapper.contains('button')).toBe(true);
  })

  it('checks if the button is disabled after a click event', () => {
    expect(vm.btnDisabled).toBe(false)
    wrapper.find('button').trigger('click')
    expect(vm.btnDisabled).toBe(true)
  })

  // Inspect the raw component data property
  it('checks to see no default value in error data', () => {
    expect(typeof Login.data).toBe('function')
    const defaultErrorData = Login.data()
    expect(defaultErrorData.error).toBe('')
  })
})
