<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="formattedDocuments" ref="messages" class="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name.toUpperCase() }}:</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import { computed, onUpdated, ref } from 'vue'
import { formatDistanceToNow } from 'date-fns'
export default {
  setup() {
    const { error, documents } = getCollection('messages')
    // format timestamp
    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map(doc => {
          let time = formatDistanceToNow(doc.createdAt.toDate())
          return { ...doc, createdAt: time }
        })
      }
    })
    // auto-scroll to bottom of messages
    const messages = ref(null)
    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight
    })
    return { error, documents, formattedDocuments, messages }
  }
}
</script>

<style scoped>
  .chat-window {
    background: #000;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;

  }
  .created-at {
    display: block;
    color: #999;
    font-size: 14px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
    color: #9b2230;
    font-size: 20px;
  }

  .message {
    font-size: 18px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
    color: #fff;
  }
</style>