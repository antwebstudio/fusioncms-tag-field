<template>
    <div>
        <portal to="title">
            <app-title :icon="layer-group">Tag</app-title>
        </portal>

		<!--
        <portal to="actions">
            <router-link :to="{ name: 'matrices.create' }" class="button">Create Matrix</router-link>
        </portal>
		-->
		
        <div class="row">
            <div class="content-container">
                <ui-table :endpoint="endpoint" id="orders" sort-by="id" primary-key="id" key="orders_table">
                    <template v-slot:name="table">
                        <div class="flex items-center">
							<!--
                            <ui-status :value="table.record.status" class="mr-2"></ui-status>
							-->
                            <router-link :to="{ name: 'tag.edit', params: {id: table.record.id} }">{{ table.record.name }}</router-link>
                        </div>
                    </template>

                    <template v-slot:slug="table">
                        <code>{{ table.record.slug }}</code>
                    </template>

					<!--
                    <template v-slot:actions="table">
                        <ui-actions :id="'matrix_' + table.record.id + '_actions'" :key="'matrix_' + table.record.id + '_actions'">
                            <ui-dropdown-link :to="{ name: 'matrices.edit', params: {order: table.record.id} }">Edit</ui-dropdown-link>

                            <ui-dropdown-link
                                @click.prevent
                                v-modal:delete-matrix="table.record"
                                classes="link--danger"
                            >
                                Delete
                            </ui-dropdown-link>
                        </ui-actions>
                    </template>
					-->
                </ui-table>
            </div>
        </div>

        <portal to="modals">
            <ui-modal name="delete-matrix" title="Delete Matrix" key="delete_matrix">
                <p>Are you sure you want to permenantly delete this matrix?</p>

                <template v-slot:footer="matrix">
                    <ui-button v-modal:delete-matrix @click="destroy(matrix.data.id)" theme="danger" class="ml-3">Delete</ui-button>
                    <ui-button v-modal:delete-matrix>Cancel</ui-button>
                </template>
            </ui-modal>
        </portal>
    </div>
</template>

<script>
    //import store from '../../store'

    export default {
        head: {
            title() {
                return {
                    inner: 'Tag'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/tags',
            }
        },

        methods: {
            destroy(id) {
                axios.delete('/api/matrices/' + id).then((response) => {
                    //store.dispatch('navigation/fetchAdminNavigation')

                    //toast('Matrix successfully deleted.', 'success')

                    //bus().$emit('refresh-datatable-matrices')
                })
            }
        }
    }
</script>
