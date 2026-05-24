<template>
  <div id="app">
    <!-- Header -->
    <header class="app-header">
      <h1>🏥 赣医保通</h1>
      <div class="subtitle">江西·南昌医保政策查询 | 数据源自官方公开文件</div>
    </header>

    <!-- Search Bar -->
    <div class="search-bar">
      <div class="search-inner">
        <span class="search-icon">🔍</span>
        <input
          ref="searchInput"
          v-model="searchQuery"
          class="search-input"
          type="text"
          placeholder="搜政策，如：住院报销、门诊共济、异地就医…"
          @input="onSearch"
        />
        <span v-if="searchQuery" class="search-clear" @click="clearSearch">✕</span>
      </div>
    </div>

    <!-- Search Results Section（原位结果，像5189一样） -->
    <div v-if="showResults" class="search-section">
      <div v-if="searchResults.length > 0">
        <div class="search-section-header">
          🔍 "<strong>{{ searchQuery }}</strong>" 共 <strong>{{ searchResults.length }}</strong> 条结果
          <span class="search-close" @click="clearSearch">✕</span>
        </div>
        <div
          v-for="(r, i) in searchResults"
          :key="i"
          class="search-result-item"
          @click="goToResult(r)"
        >
          <span class="result-cat">{{ r.icon }} {{ r.catName }}</span>
          <div class="result-title">{{ r.title }}</div>
          <div class="result-snippet">{{ r.snippet }}</div>
        </div>
      </div>
      <div v-else class="search-section-empty">
        没有找到 "<strong>{{ searchQuery }}</strong>" 相关结果<br>
        <span style="font-size:0.85rem;color:var(--text-secondary);">试试其他关键词，如：住院、门诊、报销、缴费、异地…</span>
      </div>
    </div>

    <!-- Navigation（搜索时隐藏） -->
    <nav v-show="!showResults" class="nav-bar">
      <div
        v-for="cat in categories"
        :key="cat.id"
        class="nav-item"
        :class="{ active: currentPage === cat.id }"
        @click="navigateTo(cat.id)"
      >
        {{ cat.icon }} {{ cat.name }}
      </div>
    </nav>

    <!-- Main Content（搜索时隐藏） -->
    <main v-show="!showResults" class="main-content">
      <!-- Disclaimer -->
      <div class="disclaimer">
        <strong>⚠️ 郑重声明</strong><br>
        本站所有政策内容均来自 <strong>江西省医疗保障局官网 (ybj.jiangxi.gov.cn)</strong> 和
        <strong>南昌市医疗保障局官网 (ybj.nc.gov.cn)</strong> 公开发布的文件，仅供参考。
        医保政策可能随时调整，办理业务前请以官方最新文件或医保经办窗口答复为准。
        本站<strong>不办理</strong>任何报销申报业务，不涉及个人隐私核验。
      </div>

      <!-- Home -->
      <div v-if="currentPage === 'home'">
        <div class="home-search">
          <h2>📋 江西·南昌医保政策一键查</h2>
          <p>基于官方公开文件，区分职工/居民医保，通俗解读</p>
        </div>
        <div class="quick-links">
          <div v-for="cat in quickLinks" :key="cat.id" class="quick-link" @click="navigateTo(cat.id)">
            <div class="icon">{{ cat.icon }}</div>
            <div class="name">{{ cat.name }}</div>
          </div>
        </div>
        <div style="margin-top:20px; text-align:center; font-size:0.82rem; color:var(--text-secondary); line-height:1.8;">
          <div>📖 数据来源：江西省医保局 · 南昌市医保局 · 国家医保局</div>
          <div>📅 政策截止：2025年度 · 更新于2026年5月</div>
          <div>📞 南昌医保咨询：0791-83807690</div>
        </div>
      </div>

      <!-- 参保缴费 -->
      <div v-if="currentPage === 'payment'">
        <PolicyCard :title="payment.resident.title" :source="payment.resident.source" :url="payment.resident.url">
          <PolicyItem v-for="(item, i) in payment.resident.items" :key="i" :label="item.label" :content="item.content" />
        </PolicyCard>

        <PolicyCard :title="payment.worker.title" :source="payment.worker.source">
          <PolicyItem v-for="(item, i) in payment.worker.items" :key="i" :label="item.label" :content="item.content" />
        </PolicyCard>
      </div>

      <!-- 职工住院报销 -->
      <div v-if="currentPage === 'inpatient-worker'">
        <PolicyCard :title="inpatientWorker.title" :source="inpatientWorker.source" :url="inpatientWorker.url">
          <table class="policy-table">
            <thead>
              <tr><th v-for="h in inpatientWorker.table.headers" :key="h">{{ h }}</th></tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in inpatientWorker.table.rows" :key="i">
                <td v-for="(cell, j) in row" :key="j">{{ cell }}</td>
              </tr>
            </tbody>
          </table>
          <ul class="note-list">
            <li v-for="(note, i) in inpatientWorker.notes" :key="i">{{ note }}</li>
          </ul>
        </PolicyCard>
      </div>

      <!-- 居民住院报销 -->
      <div v-if="currentPage === 'inpatient-resident'">
        <PolicyCard :title="inpatientResident.title" :source="inpatientResident.source" :url="inpatientResident.url">
          <table class="policy-table">
            <thead>
              <tr><th v-for="h in inpatientResident.table.headers" :key="h">{{ h }}</th></tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in inpatientResident.table.rows" :key="i">
                <td v-for="(cell, j) in row" :key="j">{{ cell }}</td>
              </tr>
            </tbody>
          </table>
          <ul class="note-list">
            <li v-for="(note, i) in inpatientResident.notes" :key="i">{{ note }}</li>
          </ul>
        </PolicyCard>

        <PolicyCard :title="inpatientResident.seriousIllness.title" :source="inpatientResident.seriousIllness.source" :url="inpatientResident.seriousIllness.url">
          <div v-if="inpatientResident.seriousIllness.note" class="note-box" style="background:#fff8e1;padding:10px 14px;border-radius:6px;margin-bottom:12px;font-size:14px;border-left:3px solid #f9a825;">
            ⚠️ {{ inpatientResident.seriousIllness.note }}
          </div>
          <div class="info-grid">
            <div class="info-item"><span class="label">起付线（普通居民）</span><span class="value">{{ inpatientResident.seriousIllness.deduct.normal }}</span></div>
            <div class="info-item"><span class="label">起付线（困难群体）</span><span class="value">{{ inpatientResident.seriousIllness.deduct.hardship }}</span></div>
            <div class="info-item"><span class="label">报销比例（普通）</span><span class="value">{{ inpatientResident.seriousIllness.ratio.normal }}</span></div>
            <div class="info-item"><span class="label">报销比例（困难）</span><span class="value">{{ inpatientResident.seriousIllness.ratio.hardship }}</span></div>
            <div class="info-item"><span class="label">封顶线（普通）</span><span class="value">{{ inpatientResident.seriousIllness.cap.normal }}</span></div>
            <div class="info-item"><span class="label">封顶线（困难）</span><span class="value">{{ inpatientResident.seriousIllness.cap.hardship }}</span></div>
          </div>
          <div v-if="inpatientResident.seriousIllness.scope" class="scope-box" style="background:#e8f5e9;padding:10px 14px;border-radius:6px;margin:12px 0;font-size:14px;border-left:3px solid #4caf50;">
            📌 报销范围：{{ inpatientResident.seriousIllness.scope }}
          </div>
          <div v-if="inpatientResident.seriousIllness.incentives" class="incentive-box" style="background:#e3f2fd;padding:10px 14px;border-radius:6px;margin-bottom:12px;font-size:14px;border-left:3px solid #2196f3;">
            <div style="font-weight:600;margin-bottom:6px;">🎁 2025年新增激励政策</div>
            <ul class="note-list" style="margin:0;padding-left:20px;">
              <li v-for="(inc, i) in inpatientResident.seriousIllness.incentives" :key="i">{{ inc }}</li>
            </ul>
          </div>
          <ul class="note-list">
            <li v-for="(item, i) in inpatientResident.seriousIllness.items" :key="i">{{ item }}</li>
          </ul>
        </PolicyCard>
      </div>

      <!-- 门诊待遇 -->
      <div v-if="currentPage === 'outpatient'">
        <PolicyCard :title="outpatient.worker.title" :source="outpatient.worker.source" :url="outpatient.worker.url">
          <ul class="note-list">
            <li v-for="(item, i) in outpatient.worker.items" :key="i">{{ item }}</li>
          </ul>
        </PolicyCard>

        <PolicyCard :title="outpatient.resident.title" :source="outpatient.resident.source">
          <ul class="note-list">
            <li v-for="(item, i) in outpatient.resident.items" :key="i">{{ item }}</li>
          </ul>
        </PolicyCard>

        <PolicyCard :title="outpatient.twoDiseases.title" :source="outpatient.twoDiseases.source">
          <ul class="note-list">
            <li v-for="(item, i) in outpatient.twoDiseases.items" :key="i">{{ item }}</li>
          </ul>
        </PolicyCard>
      </div>

      <!-- 门诊慢特病 -->
      <div v-if="currentPage === 'chronic'">
        <PolicyCard :title="chronic.title" :source="chronic.source" :url="chronic.url">
          <p style="margin-bottom:12px; font-size:0.92rem; line-height:1.7;">{{ chronic.overview }}</p>

          <div class="section-divider">
            <h3>📌 {{ chronic.categories.class1.name }}</h3>
            <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:8px;">
              {{ chronic.categories.class1.desc }}
            </p>
            <p style="font-size:0.92rem;">{{ chronic.categories.class1.policy }}</p>
          </div>

          <div class="section-divider">
            <h3>📌 {{ chronic.categories.class2.name }}</h3>
            <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:8px;">
              {{ chronic.categories.class2.desc }}
            </p>
            <p style="font-size:0.92rem;">{{ chronic.categories.class2.policy }}</p>
          </div>

          <ul class="note-list" style="margin-top:12px;">
            <li v-for="(note, i) in chronic.notes" :key="i">{{ note }}</li>
          </ul>
        </PolicyCard>
      </div>

      <!-- 异地就医 -->
      <div v-if="currentPage === 'cross-region'">
        <PolicyCard :title="crossRegion.title" :source="crossRegion.source" :url="crossRegion.url">
          <div class="section-divider">
            <h3>📍 {{ crossRegion.innerProvince.title }}</h3>
            <p style="font-size:0.92rem;">{{ crossRegion.innerProvince.content }}</p>
          </div>

          <div class="section-divider">
            <h3>📍 {{ crossRegion.crossProvince.title }}</h3>
            <div v-for="(item, i) in crossRegion.crossProvince.items" :key="i" class="policy-item">
              <div class="policy-label">{{ item.type }}</div>
              <div class="policy-content">{{ item.desc }}</div>
            </div>
            <table class="policy-table">
              <thead>
                <tr><th v-for="h in crossRegion.crossProvince.table.headers" :key="h">{{ h }}</th></tr>
              </thead>
              <tbody>
                <tr v-for="(row, i) in crossRegion.crossProvince.table.rows" :key="i">
                  <td v-for="(cell, j) in row" :key="j">{{ cell }}</td>
                </tr>
              </tbody>
            </table>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:8px;">
              {{ crossRegion.crossProvince.note }}
            </p>
          </div>

          <div class="section-divider">
            <h3>📍 {{ crossRegion.settlement.title }}</h3>
            <p style="font-size:0.92rem;">{{ crossRegion.settlement.content }}</p>
          </div>
        </PolicyCard>
      </div>

      <!-- 双通道药品 -->
      <div v-if="currentPage === 'dual-channel'">
        <PolicyCard :title="dualChannel.title" :source="dualChannel.source" :url="dualChannel.url">
          <p style="margin-bottom:12px; font-size:0.92rem; line-height:1.7;">{{ dualChannel.overview }}</p>
          <PolicyItem v-for="(item, i) in dualChannel.items" :key="i" :label="item.label" :content="item.content" />
        </PolicyCard>
      </div>

      <!-- 办事指南 -->
      <div v-if="currentPage === 'guide'">
        <PolicyCard title="📞 南昌市各县区医保咨询电话" :source="guide.source">
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
            <div v-for="(c, i) in guide.contacts" :key="i"
              style="padding:8px 10px; background:var(--primary-light); border-radius:8px; font-size:0.85rem;">
              <div style="font-weight:600; color:var(--primary-dark);">{{ c.area }}</div>
              <div style="color:var(--primary);">{{ c.phone }}</div>
            </div>
          </div>
        </PolicyCard>

        <PolicyCard title="🌐 线上办理平台">
          <div v-for="(p, i) in guide.onlinePlatforms" :key="i" class="policy-item">
            <div class="policy-label">
              {{ p.name }}
              <span v-if="p.url" class="source-badge" style="margin-left:6px;">
                <a :href="p.url" target="_blank" style="color:var(--primary); text-decoration:none;">直达 →</a>
              </span>
            </div>
            <div v-if="p.desc" class="policy-content">{{ p.desc }}</div>
          </div>
        </PolicyCard>

        <PolicyCard title="📋 常见办事流程">
          <div v-for="(proc, i) in guide.processItems" :key="i" class="policy-item">
            <div class="policy-label">{{ proc.title }}</div>
            <div class="policy-content">
              <div v-for="(step, j) in proc.steps" :key="j" style="padding:2px 0;">
                {{ j+1 }}. {{ step }}
              </div>
            </div>
          </div>
        </PolicyCard>
      </div>

      <!-- 职工大病保险 -->
      <div v-if="currentPage === 'worker-serious-illness'">
        <PolicyCard :title="workerSeriousIllness.title" :source="workerSeriousIllness.source" :url="workerSeriousIllness.url">
          <div v-if="workerSeriousIllness.note" class="note-box" style="background:#fff8e1;padding:10px 14px;border-radius:6px;margin-bottom:12px;font-size:14px;border-left:3px solid #f9a825;">
            ⚠️ {{ workerSeriousIllness.note }}
          </div>
          <div class="info-grid">
            <div class="info-item"><span class="label">起付线（普通）</span><span class="value">{{ workerSeriousIllness.deduct.normal }}</span></div>
            <div class="info-item"><span class="label">起付线（困难群体）</span><span class="value">{{ workerSeriousIllness.deduct.hardship }}</span></div>
            <div class="info-item"><span class="label">报销比例（普通）</span><span class="value">{{ workerSeriousIllness.ratio.normal }}</span></div>
            <div class="info-item"><span class="label">报销比例（困难）</span><span class="value">{{ workerSeriousIllness.ratio.hardship }}</span></div>
            <div class="info-item"><span class="label">封顶线（普通）</span><span class="value">{{ workerSeriousIllness.cap.normal }}</span></div>
            <div class="info-item"><span class="label">封顶线（困难）</span><span class="value">{{ workerSeriousIllness.cap.hardship }}</span></div>
          </div>
          <div v-if="workerSeriousIllness.scope" class="scope-box" style="background:#e8f5e9;padding:10px 14px;border-radius:6px;margin:12px 0;font-size:14px;border-left:3px solid #4caf50;">
            📌 报销范围：{{ workerSeriousIllness.scope }}
          </div>
          <div v-if="workerSeriousIllness.incentives" class="incentive-box" style="background:#e3f2fd;padding:10px 14px;border-radius:6px;margin-bottom:12px;font-size:14px;border-left:3px solid #2196f3;">
            <div style="font-weight:600;margin-bottom:6px;">🎁 2025年新增激励政策</div>
            <ul class="note-list" style="margin:0;padding-left:20px;">
              <li v-for="(inc, i) in workerSeriousIllness.incentives" :key="i">{{ inc }}</li>
            </ul>
          </div>
          <ul class="note-list">
            <li v-for="(item, i) in workerSeriousIllness.items" :key="i">{{ item }}</li>
          </ul>
        </PolicyCard>
      </div>

      <!-- 公务员医疗补助 -->
      <div v-if="currentPage === 'civil-servant'">
        <PolicyCard :title="civilServant.title" :source="civilServant.source">
          <div v-if="civilServant.note" class="note-box" style="background:#fff8e1;padding:10px 14px;border-radius:6px;margin-bottom:12px;font-size:14px;border-left:3px solid #f9a825;">
            ⚠️ {{ civilServant.note }}
          </div>
          <PolicyItem v-for="(item, i) in civilServant.items" :key="i" :label="item.label" :content="item.content" />
        </PolicyCard>
      </div>
    </main>
  </div>
</template>

<script>
import PolicyCard from './components/PolicyCard.vue'
import PolicyItem from './components/PolicyItem.vue'
import {
  categories, payment, inpatientWorker, inpatientResident,
  outpatient, chronic, crossRegion, dualChannel, guide,
  workerSeriousIllness, civilServant,
  buildSearchIndex, searchPolicies
} from './data/policies.js'

export default {
  name: 'App',
  components: { PolicyCard, PolicyItem },
  data() {
    return {
      currentPage: 'home',
      categories,
      payment, inpatientWorker, inpatientResident,
      outpatient, chronic, crossRegion, dualChannel, guide,
      workerSeriousIllness, civilServant,
      searchQuery: '',
      searchResults: [],
      showResults: false,
      searchIndex: buildSearchIndex()
    }
  },
  computed: {
    quickLinks() {
      return this.categories.filter(c => c.id !== 'home')
    }
  },
  methods: {
    navigateTo(id) {
      this.currentPage = id
      this.clearSearch()
    },
    onSearch() {
      if (this.searchQuery.trim().length < 1) {
        this.searchResults = []
        this.showResults = false
        return
      }
      this.searchResults = searchPolicies(this.searchQuery, this.searchIndex)
      this.showResults = true
    },
    goToResult(r) {
      this.currentPage = r.catId
      this.clearSearch()
    },
    clearSearch() {
      this.searchQuery = ''
      this.searchResults = []
      this.showResults = false
    },
  }
}
</script>
